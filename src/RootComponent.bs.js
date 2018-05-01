// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Route = require("./Route.bs.js");
var WithHeader = require("./WithHeader.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("RootComponent");

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (self) {
              Curry._1(self[/* send */3], /* UpdateRoute */[ReasonReact.Router[/* dangerouslyGetInitialUrl */3](/* () */0)]);
              return /* () */0;
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return ReasonReact.element(/* None */0, /* None */0, WithHeader.make(self[/* state */1][/* route */0], /* array */[Route.handleRouteComponents(self[/* state */1][/* route */0])]));
            }),
          /* initialState */(function () {
              return /* record */[/* route : Home */0];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _) {
              var route = Route.handleRoutes(action[0]);
              return /* Update */Block.__(0, [/* record */[/* route */route]]);
            }),
          /* subscriptions */(function (self) {
              return /* :: */[
                      /* Sub */[
                        (function () {
                            return ReasonReact.Router[/* watchUrl */1]((function (url) {
                                          return Curry._1(self[/* send */3], /* UpdateRoute */[url]);
                                        }));
                          }),
                        ReasonReact.Router[/* unwatchUrl */2]
                      ],
                      /* [] */0
                    ];
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var jsComponent = ReasonReact.wrapReasonForJs(component, (function () {
        return make(/* array */[]);
      }));

exports.component = component;
exports.make = make;
exports.jsComponent = jsComponent;
/* component Not a pure module */
