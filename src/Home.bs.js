// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Fetcher = require("./Fetcher.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Antd_Button = require("bs-ant-design/src/Antd_Button.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var SimpleTable = require("./SimpleTable.bs.js");
var Message = require("antd/lib/message");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

((require("antd/lib/message/style")));

var Message$1 = /* module */[];

var title = Css.style(/* :: */[
      Css.fontSize(Css.px(48)),
      /* [] */0
    ]);

var container = Css.style(/* :: */[
      Css.selector(" " + title, /* :: */[
            Css.fontWeight(800),
            /* :: */[
              Css.width(Css.pct(100)),
              /* [] */0
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
                Css.fontSize(Css.px(16)),
                /* :: */[
                  Css.fontWeight(400),
                  /* :: */[
                    Css.marginLeft(Css.px(30)),
                    /* [] */0
                  ]
                ]
              ]),
          /* [] */0
        ]
      ]
    ]);

var memoryAbuseContainer = Css.style(/* :: */[
      Css.width(Css.pct(100)),
      /* :: */[
        Css.$$float(/* left */-944764921),
        /* :: */[
          Css.selector(" span", /* :: */[
                Css.fontWeight(800),
                /* :: */[
                  Css.paddingRight(Css.px(8)),
                  /* [] */0
                ]
              ]),
          /* :: */[
            Css.selector(" input", /* :: */[
                  Css.border(Css.px(1), /* solid */12956715, Css.hex("000")),
                  /* [] */0
                ]),
            /* :: */[
              Css.selector(" >*", /* :: */[
                    Css.marginRight(Css.px(8)),
                    /* [] */0
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
  /* infoContainer */infoContainer,
  /* memoryAbuseContainer */memoryAbuseContainer
];

function convertRlimitToDataSource(rlimit) {
  return /* :: */[
          /* tuple */[
            "cur_cpu_limit",
            String(rlimit[/* curCpuLimit */0])
          ],
          /* :: */[
            /* tuple */[
              "max_cpu_limit",
              String(rlimit[/* maxCpuLimit */1])
            ],
            /* :: */[
              /* tuple */[
                "cur_as_limit",
                String(rlimit[/* curAsLimit */2])
              ],
              /* :: */[
                /* tuple */[
                  "max_as_limit",
                  String(rlimit[/* maxAsLimit */3])
                ],
                /* :: */[
                  /* tuple */[
                    "cur_stack_limit",
                    String(rlimit[/* curStackLimit */4])
                  ],
                  /* :: */[
                    /* tuple */[
                      "max_stack_limit",
                      String(rlimit[/* maxStackLimit */5])
                    ],
                    /* :: */[
                      /* tuple */[
                        "cur_data_limit",
                        String(rlimit[/* curDataLimit */6])
                      ],
                      /* :: */[
                        /* tuple */[
                          "max_data_limit",
                          String(rlimit[/* maxDataLimit */7])
                        ],
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ];
}

function listToString_(d) {
  if (d) {
    var tail = d[1];
    var last = d[0];
    if (tail) {
      return last + (", " + listToString_(tail));
    } else {
      return last;
    }
  } else {
    return "";
  }
}

function listToString(d) {
  return "[" + (listToString_(d) + "]");
}

var component = ReasonReact.reducerComponent("HomePageContainer");

function make(rlimit, fdList, mountList, _) {
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
          /* render */(function (self) {
              return React.createElement("div", {
                          className: container
                        }, React.createElement("h1", {
                              className: title
                            }, "Dashboard"), React.createElement("div", {
                              className: infoContainer
                            }, React.createElement("h2", undefined, "RLimit"), ReasonReact.element(/* None */0, /* None */0, SimpleTable.make(convertRlimitToDataSource(rlimit), /* array */[]))), React.createElement("div", {
                              className: infoContainer
                            }, React.createElement("h2", undefined, "FD List"), React.createElement("h3", undefined, listToString(fdList))), React.createElement("div", {
                              className: infoContainer
                            }, React.createElement("h2", undefined, "Mount List"), Belt_List.toArray(Belt_List.mapWithIndex(mountList, (function (ikey, text) {
                                        return React.createElement("h3", {
                                                    key: String(ikey)
                                                  }, text);
                                      })))), React.createElement("div", {
                              className: infoContainer
                            }, React.createElement("h2", undefined, "Reverse Shell & Memory Limit"), React.createElement("div", {
                                  className: memoryAbuseContainer
                                }, React.createElement("span", undefined, "Memory Size (byte): "), React.createElement("input", {
                                      name: "memorySize",
                                      type: "number",
                                      value: String(self[/* state */1][/* memory */0]),
                                      onChange: (function ($$event) {
                                          var target = $$event.target;
                                          console.log(target.value);
                                          var myMessage = target.value;
                                          var tmp;
                                          if (myMessage === "") {
                                            tmp = 0;
                                          } else {
                                            try {
                                              tmp = Caml_format.caml_int_of_string(myMessage);
                                            }
                                            catch (raw_exn){
                                              var exn = Js_exn.internalToOCamlException(raw_exn);
                                              if (exn[0] === Caml_builtin_exceptions.failure) {
                                                if (exn[1] === "int_of_string") {
                                                  tmp = self[/* state */1][/* memory */0];
                                                } else {
                                                  throw exn;
                                                }
                                              } else {
                                                throw exn;
                                              }
                                            }
                                          }
                                          return Curry._1(self[/* send */3], /* SetMemory */[tmp]);
                                        })
                                    }), ReasonReact.element(/* None */0, /* None */0, Antd_Button.make(/* Some */[/* primary */58474434], /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[(function () {
                                              Fetcher.Allocate[/* fetch */0](/* None */0, /* None */0, /* Some */["/" + String(self[/* state */1][/* memory */0])], /* () */0).then((function (res) {
                                                      var match = res.status;
                                                      if (match !== 400) {
                                                        Message.info("container allocate successfully", undefined, undefined);
                                                      } else {
                                                        Message.error("container fail to allocate", undefined, undefined);
                                                      }
                                                      return Promise.resolve(res);
                                                    }));
                                              return /* () */0;
                                            })], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */["Allocate"])))));
            }),
          /* initialState */(function () {
              return /* record */[/* memory */1024];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _) {
              return /* Update */Block.__(0, [/* record */[/* memory */action[0]]]);
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var Component = /* module */[
  /* component */component,
  /* make */make
];

var partial_arg = Fetcher.RLimit[/* c */3];

var partial_arg$1 = Fetcher.FdList[/* c */3];

var partial_arg$2 = Fetcher.MountList[/* c */3];

function fetchers_000(param) {
  return partial_arg(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0, param);
}

function fetchers_001(param) {
  return partial_arg$1(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0, param);
}

function fetchers_002(param) {
  return partial_arg$2(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0, param);
}

var fetchers = /* tuple */[
  fetchers_000,
  fetchers_001,
  fetchers_002
];

var component$1 = ReasonReact.statelessComponent("HomePage");

function make$1() {
  return /* record */[
          /* debugName */component$1[/* debugName */0],
          /* reactClassInternal */component$1[/* reactClassInternal */1],
          /* handedOffState */component$1[/* handedOffState */2],
          /* willReceiveProps */component$1[/* willReceiveProps */3],
          /* didMount */component$1[/* didMount */4],
          /* didUpdate */component$1[/* didUpdate */5],
          /* willUnmount */component$1[/* willUnmount */6],
          /* willUpdate */component$1[/* willUpdate */7],
          /* shouldUpdate */component$1[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(/* None */0, /* None */0, Fetcher.Composer3[/* make */1](fetchers, (function (param) {
                                var mountList = param[2];
                                var fdList = param[1];
                                var rlimit = param[0];
                                var match = rlimit[/* state */0][/* status */2];
                                var match$1 = fdList[/* state */0][/* status */2];
                                var match$2 = mountList[/* state */0][/* status */2];
                                var exit = 0;
                                if (match !== 0 || match$1 !== 0 || match$2 !== 0) {
                                  exit = 1;
                                } else {
                                  return ReasonReact.element(/* None */0, /* None */0, make(rlimit[/* state */0][/* data */0], fdList[/* state */0][/* data */0], mountList[/* state */0][/* data */0], /* array */[]));
                                }
                                if (exit === 1) {
                                  return React.createElement("div", {
                                              key: "4"
                                            }, "Loading");
                                }
                                
                              }), /* array */[]));
            }),
          /* initialState */component$1[/* initialState */10],
          /* retainedProps */component$1[/* retainedProps */11],
          /* reducer */component$1[/* reducer */12],
          /* subscriptions */component$1[/* subscriptions */13],
          /* jsElementWrapped */component$1[/* jsElementWrapped */14]
        ];
}

exports.Message = Message$1;
exports.Styles = Styles;
exports.convertRlimitToDataSource = convertRlimitToDataSource;
exports.listToString_ = listToString_;
exports.listToString = listToString;
exports.Component = Component;
exports.fetchers = fetchers;
exports.component = component$1;
exports.make = make$1;
/*  Not a pure module */
