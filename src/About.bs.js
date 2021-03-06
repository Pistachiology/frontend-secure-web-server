// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("About Page");

var title = Css.style(/* :: */[
      Css.fontSize(Css.px(48)),
      /* [] */0
    ]);

var container = Css.style(/* :: */[
      Css.selector(" " + title, /* :: */[
            Css.fontWeight(800),
            /* :: */[
              Css.width(Css.pct(100)),
              /* :: */[
                Css.$$float(/* left */-944764921),
                /* :: */[
                  Css.width(Css.pct(100)),
                  /* [] */0
                ]
              ]
            ]
          ]),
      /* [] */0
    ]);

var infoContainer = Css.style(/* :: */[
      Css.padding2(Css.px(32), Css.px(32)),
      /* :: */[
        Css.selector(" h2", /* :: */[
              Css.fontSize(Css.px(32)),
              /* :: */[
                Css.marginBottom(Css.px(16)),
                /* [] */0
              ]
            ]),
        /* :: */[
          Css.selector(" h3", /* :: */[
                Css.fontSize(Css.px(24)),
                /* :: */[
                  Css.fontWeight(600),
                  /* :: */[
                    Css.marginBottom(Css.px(16)),
                    /* [] */0
                  ]
                ]
              ]),
          /* :: */[
            Css.selector(" p", /* :: */[
                  Css.color(Css.black),
                  /* [] */0
                ]),
            /* :: */[
              Css.selector(" .box", /* :: */[
                    Css.width(Css.pct(50)),
                    /* :: */[
                      Css.height(Css.px(200)),
                      /* :: */[
                        Css.$$float(/* left */-944764921),
                        /* [] */0
                      ]
                    ]
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var Styles = /* module */[
  /* title */title,
  /* container */container,
  /* infoContainer */infoContainer
];

function make() {
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
                          className: container
                        }, React.createElement("h1", {
                              className: title
                            }, "About"), React.createElement("div", {
                              className: infoContainer
                            }, React.createElement("div", {
                                  className: "box"
                                }, React.createElement("h3", undefined, "Developed By"), React.createElement("p", undefined, "Nuttapol Laoticharoen"), React.createElement("p", undefined, "#5710500208")), React.createElement("br", undefined), React.createElement("div", {
                                  className: "box"
                                }, React.createElement("h3", undefined, "Advisor"), React.createElement("p", undefined, "Paruj Ratanaworabhan")), React.createElement("div", {
                                  className: "box"
                                }, React.createElement("h3", undefined, "Implementation"), React.createElement("p", undefined, "Frontend: ReasonML (Reason-React)"), React.createElement("p", undefined, "Backend: Rust"))));
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
