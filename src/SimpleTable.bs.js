// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("SimpleTable");

var darkColor = Css.hex("f2f2f2");

var infoTable = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.flexDirection(/* column */-963948842),
        /* :: */[
          Css.flexWrap(/* nowrap */867913355),
          /* :: */[
            Css.border(Css.px(1), /* solid */12956715, darkColor),
            /* :: */[
              Css.width(Css.pct(100)),
              /* :: */[
                Css.selector(" .header", /* :: */[
                      Css.fontWeight(800),
                      /* :: */[
                        Css.backgroundColor(darkColor),
                        /* [] */0
                      ]
                    ]),
                /* :: */[
                  Css.selector(" .row", /* :: */[
                        Css.display(/* flex */-1010954439),
                        /* :: */[
                          Css.width(Css.pct(100)),
                          /* :: */[
                            Css.alignContent(/* center */98248149),
                            /* :: */[
                              Css.padding(Css.px(8)),
                              /* :: */[
                                Css.selector(" .item", /* :: */[
                                      Css.width(Css.pct(50)),
                                      /* :: */[
                                        Css.textAlign(/* center */98248149),
                                        /* [] */0
                                      ]
                                    ]),
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ]),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = /* module */[
  /* darkColor */darkColor,
  /* infoTable */infoTable
];

function make(dataSource, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return React.createElement("div", {
                          className: infoTable
                        }, React.createElement("div", {
                              className: "header row"
                            }, React.createElement("div", {
                                  className: "item"
                                }, "Key"), React.createElement("div", {
                                  className: "item"
                                }, "Value")), $$Array.of_list(List.mapi((function (key, param) {
                                    return React.createElement("div", {
                                                key: String(key),
                                                className: "row"
                                              }, React.createElement("div", {
                                                    className: "item"
                                                  }, param[0]), React.createElement("div", {
                                                    className: "item"
                                                  }, param[1]));
                                  }), dataSource)));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
