(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/BehaviorSubject'), require('@angular/core'), require('@ngrx/core'), require('rxjs/Observable'), require('rxjs/operator/withLatestFrom'), require('rxjs/operator/scan'), require('rxjs/operator/observeOn'), require('rxjs/scheduler/queue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'rxjs/BehaviorSubject', '@angular/core', '@ngrx/core', 'rxjs/Observable', 'rxjs/operator/withLatestFrom', 'rxjs/operator/scan', 'rxjs/operator/observeOn', 'rxjs/scheduler/queue'], factory) :
    (factory((global.ngrx = global.ngrx || {}, global.ngrx.store = global.ngrx.store || {}),global.Rx,global.ng.core,global.ngrx.core,global.Rx,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Scheduler));
}(this, (function (exports,rxjs_BehaviorSubject,_angular_core,_ngrx_core,rxjs_Observable,rxjs_operator_withLatestFrom,rxjs_operator_scan,rxjs_operator_observeOn,rxjs_scheduler_queue) { 'use strict';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        return _super.call(this, { type: Dispatcher.INIT }) || this;
    }
    Dispatcher.prototype.dispatch = function (action) {
        this.next(action);
    };
    Dispatcher.prototype.complete = function () {
        // noop
    };
    return Dispatcher;
}(rxjs_BehaviorSubject.BehaviorSubject));
Dispatcher.INIT = '@ngrx/store/init';

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Reducer = (function (_super) {
    __extends$1(Reducer, _super);
    function Reducer(_dispatcher, initialReducer) {
        var _this = _super.call(this, initialReducer) || this;
        _this._dispatcher = _dispatcher;
        return _this;
    }
    Reducer.prototype.replaceReducer = function (reducer) {
        this.next(reducer);
    };
    Reducer.prototype.next = function (reducer) {
        _super.prototype.next.call(this, reducer);
        this._dispatcher.dispatch({ type: Reducer.REPLACE });
    };
    return Reducer;
}(rxjs_BehaviorSubject.BehaviorSubject));
Reducer.REPLACE = '@ngrx/store/replace-reducer';

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Store = (function (_super) {
    __extends$2(Store, _super);
    function Store(_dispatcher, _reducer, state$) {
        var _this = _super.call(this) || this;
        _this._dispatcher = _dispatcher;
        _this._reducer = _reducer;
        _this.select = _ngrx_core.select.bind(_this);
        _this.source = state$;
        return _this;
    }
    Store.prototype.lift = function (operator) {
        var store = new Store(this._dispatcher, this._reducer, this);
        store.operator = operator;
        return store;
    };
    Store.prototype.replaceReducer = function (reducer) {
        this._reducer.next(reducer);
    };
    Store.prototype.dispatch = function (action) {
        this._dispatcher.next(action);
    };
    Store.prototype.next = function (action) {
        this._dispatcher.next(action);
    };
    Store.prototype.error = function (err) {
        this._dispatcher.error(err);
    };
    Store.prototype.complete = function () {
        // noop
    };
    return Store;
}(rxjs_Observable.Observable));

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var State = (function (_super) {
    __extends$3(State, _super);
    function State(_initialState, action$, reducer$) {
        var _this = _super.call(this, _initialState) || this;
        var actionInQueue$ = rxjs_operator_observeOn.observeOn.call(action$, rxjs_scheduler_queue.queue);
        var actionAndReducer$ = rxjs_operator_withLatestFrom.withLatestFrom.call(actionInQueue$, reducer$);
        var state$ = rxjs_operator_scan.scan.call(actionAndReducer$, function (state, _a) {
            var action = _a[0], reducer = _a[1];
            return reducer(state, action);
        }, _initialState);
        state$.subscribe(function (value) { return _this.next(value); });
        return _this;
    }
    return State;
}(rxjs_BehaviorSubject.BehaviorSubject));

function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var finalReducerKeys = Object.keys(finalReducers);
    return function combination(state, action) {
        if (state === void 0) { state = {}; }
        var hasChanged = false;
        var nextState = {};
        for (var i = 0; i < finalReducerKeys.length; i++) {
            var key = finalReducerKeys[i];
            var reducer = finalReducers[key];
            var previousStateForKey = state[key];
            var nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var INITIAL_REDUCER = new _angular_core.OpaqueToken('Token ngrx/store/reducer');
var INITIAL_STATE = new _angular_core.OpaqueToken('Token ngrx/store/initial-state');
var _INITIAL_REDUCER = new _angular_core.OpaqueToken('Token _ngrx/store/reducer');
var _INITIAL_STATE = new _angular_core.OpaqueToken('Token _ngrx/store/initial-state');
function _initialReducerFactory(reducer) {
    if (typeof reducer === 'function') {
        return reducer;
    }
    return combineReducers(reducer);
}
function _initialStateFactory(initialState, reducer) {
    if (!initialState) {
        return reducer(undefined, { type: Dispatcher.INIT });
    }
    return initialState;
}
function _storeFactory(dispatcher, reducer, state$) {
    return new Store(dispatcher, reducer, state$);
}
function _stateFactory(initialState, dispatcher, reducer) {
    return new State(initialState, dispatcher, reducer);
}
function _reducerFactory(dispatcher, reducer) {
    return new Reducer(dispatcher, reducer);
}
;
/**
 * @deprecated, use StoreModule.provideStore instead!
 */
function provideStore(_reducer, _initialState) {
    return [
        Dispatcher,
        { provide: Store, useFactory: _storeFactory, deps: [Dispatcher, Reducer, State] },
        { provide: Reducer, useFactory: _reducerFactory, deps: [Dispatcher, INITIAL_REDUCER] },
        { provide: State, useFactory: _stateFactory, deps: [INITIAL_STATE, Dispatcher, Reducer] },
        { provide: INITIAL_REDUCER, useFactory: _initialReducerFactory, deps: [_INITIAL_REDUCER] },
        { provide: INITIAL_STATE, useFactory: _initialStateFactory, deps: [_INITIAL_STATE, INITIAL_REDUCER] },
        { provide: _INITIAL_STATE, useValue: _initialState },
        { provide: _INITIAL_REDUCER, useValue: _reducer }
    ];
}
exports.StoreModule = StoreModule_1 = (function () {
    function StoreModule() {
    }
    StoreModule.provideStore = function (_reducer, _initialState) {
        return {
            ngModule: StoreModule_1,
            providers: provideStore(_reducer, _initialState)
        };
    };
    return StoreModule;
}());
exports.StoreModule = StoreModule_1 = __decorate([
    _angular_core.NgModule({})
], exports.StoreModule);
var StoreModule_1;

exports.Dispatcher = Dispatcher;
exports.INITIAL_REDUCER = INITIAL_REDUCER;
exports.INITIAL_STATE = INITIAL_STATE;
exports._INITIAL_REDUCER = _INITIAL_REDUCER;
exports._INITIAL_STATE = _INITIAL_STATE;
exports._initialReducerFactory = _initialReducerFactory;
exports._initialStateFactory = _initialStateFactory;
exports._storeFactory = _storeFactory;
exports._stateFactory = _stateFactory;
exports._reducerFactory = _reducerFactory;
exports.provideStore = provideStore;
exports.Reducer = Reducer;
exports.State = State;
exports.Store = Store;
exports.combineReducers = combineReducers;

Object.defineProperty(exports, '__esModule', { value: true });

})));