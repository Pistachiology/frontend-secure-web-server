// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Route = require("./Route.bs.js");
var React = require("react");
var Antd_Menu = require("bs-ant-design/src/Antd_Menu.js");
var Antd_Layout = require("bs-ant-design/src/Antd_Layout.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Antd_Breadcrumb = require("bs-ant-design/src/Antd_Breadcrumb.js");

var menu = Css.style(/* :: */[
      /* `declaration */[
        -434952966,
        /* tuple */[
          "lineHeight",
          "64px !important"
        ]
      ],
      /* [] */0
    ]);

var content = Css.style(/* :: */[
      Css.padding2(Css.px(0), Css.px(50)),
      /* :: */[
        Css.width(Css.pct(100)),
        /* :: */[
          Css.$$float(/* left */-944764921),
          /* :: */[
            Css.minHeight(Css.vh(100)),
            /* [] */0
          ]
        ]
      ]
    ]);

var childbox = Css.style(/* :: */[
      Css.background(Css.hex("fff")),
      /* :: */[
        Css.padding(Css.px(24)),
        /* :: */[
          Css.minHeight(Css.px(280)),
          /* :: */[
            Css.width(Css.pct(100)),
            /* :: */[
              Css.$$float(/* left */-944764921),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var breadcrumb = Css.style(/* :: */[
      Css.important(Css.margin2(Css.px(16), Css.px(16))),
      /* [] */0
    ]);

var Styles = /* module */[
  /* menu */menu,
  /* content */content,
  /* childbox */childbox,
  /* breadcrumb */breadcrumb
];

var component = ReasonReact.statelessComponent("Header");

function make(route, children) {
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
              return ReasonReact.element(/* None */0, /* None */0, Antd_Layout.make(/* None */0, /* None */0, /* None */0, /* array */[
                              ReasonReact.element(/* None */0, /* None */0, Antd_Layout.Header[/* make */0](/* None */0, /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, Antd_Menu.make(/* Some */[/* Dark */758939798], /* Some */[/* Horizontal */208994564], /* None */0, /* Some */[/* array */[Route.toKey(route)]], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[menu], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                  ReasonReact.element(/* Some */[Route.toKey(/* Home */0)], /* None */0, Antd_Menu.Item[/* make */0](/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[React.createElement("div", {
                                                                  onClick: (function () {
                                                                      ReasonReact.Router[/* push */0]("/");
                                                                      return /* () */0;
                                                                    })
                                                                }, Route.toString(/* Home */0))])),
                                                  ReasonReact.element(/* Some */[Route.toKey(/* About */1)], /* None */0, Antd_Menu.Item[/* make */0](/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[React.createElement("div", {
                                                                  onClick: (function () {
                                                                      ReasonReact.Router[/* push */0]("/about");
                                                                      return /* () */0;
                                                                    })
                                                                }, Route.toString(/* About */1))]))
                                                ]))])),
                              ReasonReact.element(/* None */0, /* None */0, Antd_Layout.Content[/* make */0](/* None */0, /* Some */[content], /* None */0, /* array */[
                                        ReasonReact.element(/* None */0, /* None */0, Antd_Breadcrumb.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[breadcrumb], /* None */0)(/* array */[ReasonReact.element(/* None */0, /* None */0, Antd_Breadcrumb.Item[/* make */0](/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[Route.toString(route)]))])),
                                        ReasonReact.createDomElement("div", {
                                              className: childbox
                                            }, children)
                                      ]))
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.Styles = Styles;
exports.component = component;
exports.make = make;
/* menu Not a pure module */
