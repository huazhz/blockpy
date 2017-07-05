JavaScript debugger enabled
/*     1 */ $compiledmod = function() {
/*     2 */     var $scope120 = (function($modname) {
/*     3 */         var $loadname134, $loadname136;
/*     4 */         var $wakeFromSuspension = function() {
/*     5 */             var susp = $scope120.$wakingSuspension;
/*     6 */             delete $scope120.$wakingSuspension;
/*     7 */             $blk = susp.$blk;
/*     8 */             $loc = susp.$loc;
/*     9 */             $gbl = susp.$gbl;
/*    10 */             $exc = susp.$exc;
/*    11 */             $err = susp.$err;
/*    12 */             $currLineNo = susp.$lineno;
/*    13 */             $currColNo = susp.$colno;
/*    14 */             Sk.lastYield = Date.now();
/*    15 */             $loadname134 = susp.$tmps.$loadname134;
/*    16 */             $loadname136 = susp.$tmps.$loadname136;
/*    17 */             try {
/*    18 */                 $ret = susp.child.resume();
/*    19 */             } catch (err) {
/*    20 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*    21 */                     err = new Sk.builtin.ExternalError(err);
/*    22 */                 }
/*    23 */                 err.traceback.push({
/*    24 */                     lineno: $currLineNo,
/*    25 */                     colno: $currColNo,
/*    26 */                     filename: './my_test.py'
/*    27 */                 });
/*    28 */                 if ($exc.length > 0) {
/*    29 */                     $err = err;
/*    30 */                     $blk = $exc.pop();
/*    31 */                 } else {
/*    32 */                     throw err;
/*    33 */                 }
/*    34 */             }
/*    35 */         };
/*    36 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*    37 */             var susp = new Sk.misceval.Suspension();
/*    38 */             susp.child = $child;
/*    39 */             susp.resume = function() {
/*    40 */                 $scope120.$wakingSuspension = susp;
/*    41 */                 return $scope120();
/*    42 */             };
/*    43 */             susp.data = susp.child.data;
/*    44 */             susp.$blk = $blk;
/*    45 */             susp.$loc = $loc;
/*    46 */             susp.$gbl = $gbl;
/*    47 */             susp.$exc = $exc;
/*    48 */             susp.$err = $err;
/*    49 */             susp.$filename = $filename;
/*    50 */             susp.$lineno = $lineno;
/*    51 */             susp.$colno = $colno;
/*    52 */             susp.optional = susp.child.optional;
/*    53 */             susp.$tmps = {
/*    54 */                 "$loadname134": $loadname134,
/*    55 */                 "$loadname136": $loadname136
/*    56 */             };
/*    57 */             return susp;
/*    58 */         };
/*    59 */         var $gbl = {},
/*    60 */             $blk = 0,
/*    61 */             $exc = [],
/*    62 */             $loc = $gbl,
/*    63 */             $err = undefined;
/*    64 */         $gbl.__name__ = $modname;
/*    65 */         $loc.__file__ = new Sk.builtins.str('./my_test.py');
/*    66 */         var $ret = undefined,
/*    67 */             $currLineNo = undefined,
/*    68 */             $currColNo = undefined;
/*    69 */         if (typeof Sk.execStart === 'undefined') {
/*    70 */             Sk.execStart = Date.now()
/*    71 */         }
/*    72 */         if (typeof Sk.lastYield === 'undefined') {
/*    73 */             Sk.lastYield = Date.now()
/*    74 */         }
/*    75 */         if ($scope120.$wakingSuspension !== undefined) {
/*    76 */             $wakeFromSuspension();
/*    77 */         }
/*    78 */         if (Sk.retainGlobals) {
/*    79 */             if (Sk.globals) {
/*    80 */                 $gbl = Sk.globals;
/*    81 */                 Sk.globals = $gbl;
/*    82 */                 $loc = $gbl;
/*    83 */             } else {
/*    84 */                 Sk.globals = $gbl;
/*    85 */             }
/*    86 */         } else {
/*    87 */             Sk.globals = $gbl;
/*    88 */         }
/*    89 */         while (true) {
/*    90 */             try {
/*    91 */                 var $dateNow = Date.now();
/*    92 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*    93 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*    94 */                 }
/*    95 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*    96 */                     var $susp = $saveSuspension({
/*    97 */                         data: {
/*    98 */                             type: 'Sk.yield'
/*    99 */                         },
/*   100 */                         resume: function() {}
/*   101 */                     }, './my_test.py', $currLineNo, $currColNo);
/*   102 */                     $susp.$blk = $blk;
/*   103 */                     $susp.optional = true;
/*   104 */                     return $susp;
/*   105 */                 }
/*   106 */                 switch ($blk) {
/*   107 */                 case 0:
/*   108 */                     /* --- module entry --- */
/*   109 */                     //
/*   110 */                     // line 1:
/*   111 */                     // class Stack():
/*   112 */                     // ^
/*   113 */                     //
/*   114 */                     Sk.currLineNo = 1;
/*   115 */                     Sk.currColNo = 0;
/*   116 */ 
/*   117 */ 
/*   118 */                     Sk.currFilename = './my_test.py';
/*   119 */ 
/*   120 */ 
/*   121 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   122 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename, 'ClassDef', {
/*   123 */                             "name": {
/*   124 */                                 "v": "Stack"
/*   125 */                             },
/*   126 */                             "bases": [],
/*   127 */                             "body": [{
/*   128 */                                 "name": {
/*   129 */                                     "v": "__init__",
/*   130 */                                     "$savedHash_": {
/*   131 */                                         "v": 3
/*   132 */                                     }
/*   133 */                                 },
/*   134 */                                 "args": {
/*   135 */                                     "args": [{
/*   136 */                                         "id": {
/*   137 */                                             "v": "self"
/*   138 */                                         },
/*   139 */                                         "lineno": 2,
/*   140 */                                         "col_offset": 17,
/*   141 */                                         "endlineno": 2,
/*   142 */                                         "col_endoffset": 21}],
/*   143 */                                     "vararg": null,
/*   144 */                                     "kwarg": null,
/*   145 */                                     "defaults": []
/*   146 */                                 },
/*   147 */                                 "body": [{
/*   148 */                                     "targets": [{
/*   149 */                                         "value": {
/*   150 */                                             "id": {
/*   151 */                                                 "v": "self"
/*   152 */                                             },
/*   153 */                                             "lineno": 3,
/*   154 */                                             "col_offset": 8,
/*   155 */                                             "endlineno": 3,
/*   156 */                                             "col_endoffset": 12
/*   157 */                                         },
/*   158 */                                         "attr": {
/*   159 */                                             "v": "value"
/*   160 */                                         },
/*   161 */                                         "lineno": 3,
/*   162 */                                         "col_offset": 8,
/*   163 */                                         "endlineno": 3,
/*   164 */                                         "col_endoffset": 12}],
/*   165 */                                     "value": {
/*   166 */                                         "n": {
/*   167 */                                             "v": 5
/*   168 */                                         },
/*   169 */                                         "lineno": 3,
/*   170 */                                         "col_offset": 21,
/*   171 */                                         "endlineno": 3,
/*   172 */                                         "col_endoffset": 22
/*   173 */                                     },
/*   174 */                                     "lineno": 3,
/*   175 */                                     "col_offset": 8,
/*   176 */                                     "endlineno": 3,
/*   177 */                                     "col_endoffset": 12}],
/*   178 */                                 "decorator_list": [],
/*   179 */                                 "lineno": 2,
/*   180 */                                 "col_offset": 4,
/*   181 */                                 "endlineno": 2,
/*   182 */                                 "col_endoffset": 7,
/*   183 */                                 "scopeId": 20},
/*   184 */                             {
/*   185 */                                 "name": {
/*   186 */                                     "v": "__str__"
/*   187 */                                 },
/*   188 */                                 "args": {
/*   189 */                                     "args": [{
/*   190 */                                         "id": {
/*   191 */                                             "v": "self"
/*   192 */                                         },
/*   193 */                                         "lineno": 4,
/*   194 */                                         "col_offset": 16,
/*   195 */                                         "endlineno": 4,
/*   196 */                                         "col_endoffset": 20}],
/*   197 */                                     "vararg": null,
/*   198 */                                     "kwarg": null,
/*   199 */                                     "defaults": []
/*   200 */                                 },
/*   201 */                                 "body": [{
/*   202 */                                     "value": {
/*   203 */                                         "s": {
/*   204 */                                             "v": "test"
/*   205 */                                         },
/*   206 */                                         "lineno": 5,
/*   207 */                                         "col_offset": 15,
/*   208 */                                         "endlineno": 5,
/*   209 */                                         "col_endoffset": 21
/*   210 */                                     },
/*   211 */                                     "lineno": 5,
/*   212 */                                     "col_offset": 8,
/*   213 */                                     "endlineno": 5,
/*   214 */                                     "col_endoffset": 14}],
/*   215 */                                 "decorator_list": [],
/*   216 */                                 "lineno": 4,
/*   217 */                                 "col_offset": 4,
/*   218 */                                 "endlineno": 4,
/*   219 */                                 "col_endoffset": 7,
/*   220 */                                 "scopeId": 21},
/*   221 */                             {
/*   222 */                                 "name": {
/*   223 */                                     "v": "__repr__"
/*   224 */                                 },
/*   225 */                                 "args": {
/*   226 */                                     "args": [{
/*   227 */                                         "id": {
/*   228 */                                             "v": "self"
/*   229 */                                         },
/*   230 */                                         "lineno": 6,
/*   231 */                                         "col_offset": 17,
/*   232 */                                         "endlineno": 6,
/*   233 */                                         "col_endoffset": 21}],
/*   234 */                                     "vararg": null,
/*   235 */                                     "kwarg": null,
/*   236 */                                     "defaults": []
/*   237 */                                 },
/*   238 */                                 "body": [{
/*   239 */                                     "value": {
/*   240 */                                         "s": {
/*   241 */                                             "v": "alpha"
/*   242 */                                         },
/*   243 */                                         "lineno": 7,
/*   244 */                                         "col_offset": 15,
/*   245 */                                         "endlineno": 7,
/*   246 */                                         "col_endoffset": 22
/*   247 */                                     },
/*   248 */                                     "lineno": 7,
/*   249 */                                     "col_offset": 8,
/*   250 */                                     "endlineno": 7,
/*   251 */                                     "col_endoffset": 14}],
/*   252 */                                 "decorator_list": [],
/*   253 */                                 "lineno": 6,
/*   254 */                                 "col_offset": 4,
/*   255 */                                 "endlineno": 6,
/*   256 */                                 "col_endoffset": 7,
/*   257 */                                 "scopeId": 22}],
/*   258 */                             "decorator_list": [],
/*   259 */                             "lineno": 1,
/*   260 */                             "col_offset": 0,
/*   261 */                             "endlineno": 1,
/*   262 */                             "col_endoffset": 5,
/*   263 */                             "scopeId": 19
/*   264 */                         });
/*   265 */                     }
/*   266 */                     currLineNo = 1;
/*   267 */                     currColNo = 0;
/*   268 */ 
/*   269 */                     $scope121.co_name = new Sk.builtins['str']('Stack');
/*   270 */                     var $built133 = Sk.misceval.buildClass($gbl, $scope121, 'Stack', []);
/*   271 */                     $loc.Stack = $built133;
/*   272 */                     //
/*   273 */                     // line 9:
/*   274 */                     // s = Stack()
/*   275 */                     // ^
/*   276 */                     //
/*   277 */                     Sk.currLineNo = 9;
/*   278 */                     Sk.currColNo = 0;
/*   279 */ 
/*   280 */ 
/*   281 */                     Sk.currFilename = './my_test.py';
/*   282 */ 
/*   283 */ 
/*   284 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   285 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename, 'Assign', {
/*   286 */                             "targets": [{
/*   287 */                                 "id": {
/*   288 */                                     "v": "s"
/*   289 */                                 },
/*   290 */                                 "lineno": 9,
/*   291 */                                 "col_offset": 0,
/*   292 */                                 "endlineno": 9,
/*   293 */                                 "col_endoffset": 1}],
/*   294 */                             "value": {
/*   295 */                                 "func": {
/*   296 */                                     "id": {
/*   297 */                                         "v": "Stack"
/*   298 */                                     },
/*   299 */                                     "lineno": 9,
/*   300 */                                     "col_offset": 4,
/*   301 */                                     "endlineno": 9,
/*   302 */                                     "col_endoffset": 9
/*   303 */                                 },
/*   304 */                                 "args": [],
/*   305 */                                 "keywords": [],
/*   306 */                                 "starargs": null,
/*   307 */                                 "kwargs": null,
/*   308 */                                 "lineno": 9,
/*   309 */                                 "col_offset": 4,
/*   310 */                                 "endlineno": 9,
/*   311 */                                 "col_endoffset": 9
/*   312 */                             },
/*   313 */                             "lineno": 9,
/*   314 */                             "col_offset": 0,
/*   315 */                             "endlineno": 9,
/*   316 */                             "col_endoffset": 1
/*   317 */                         });
/*   318 */                     }
/*   319 */                     currLineNo = 9;
/*   320 */                     currColNo = 0;
/*   321 */ 
/*   322 */                     var $loadname134 = $loc.Stack !== undefined ? $loc.Stack : Sk.misceval.loadname('Stack', $gbl);;
/*   323 */                     $ret;
/*   324 */                     $ret = Sk.misceval.callsimOrSuspend($loadname134);
/*   325 */                     $blk = 1; /* allowing case fallthrough */
/*   326 */                 case 1:
/*   327 */                     /* --- function return or resume suspension --- */
/*   328 */                     if ($ret && $ret.$isSuspension) {
/*   329 */                         return $saveSuspension($ret, './my_test.py', 9, 4);
/*   330 */                     }
/*   331 */                     var $call135 = $ret;
/*   332 */                     //
/*   333 */                     // line 9:
/*   334 */                     // s = Stack()
/*   335 */                     //     ^
/*   336 */                     //
/*   337 */                     Sk.currLineNo = 9;
/*   338 */                     Sk.currColNo = 4;
/*   339 */ 
/*   340 */ 
/*   341 */                     Sk.currFilename = './my_test.py';
/*   342 */ 
/*   343 */                     currLineNo = 9;
/*   344 */                     currColNo = 4;
/*   345 */ 
/*   346 */                     $loc.s = $call135;
/*   347 */                     //
/*   348 */                     // line 10:
/*   349 */                     // s.other_value = 10
/*   350 */                     // ^
/*   351 */                     //
/*   352 */                     Sk.currLineNo = 10;
/*   353 */                     Sk.currColNo = 0;
/*   354 */ 
/*   355 */ 
/*   356 */                     Sk.currFilename = './my_test.py';
/*   357 */ 
/*   358 */ 
/*   359 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   360 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename, 'Assign', {
/*   361 */                             "targets": [{
/*   362 */                                 "value": {
/*   363 */                                     "id": {
/*   364 */                                         "v": "s"
/*   365 */                                     },
/*   366 */                                     "lineno": 10,
/*   367 */                                     "col_offset": 0,
/*   368 */                                     "endlineno": 10,
/*   369 */                                     "col_endoffset": 1
/*   370 */                                 },
/*   371 */                                 "attr": {
/*   372 */                                     "v": "other_value"
/*   373 */                                 },
/*   374 */                                 "lineno": 10,
/*   375 */                                 "col_offset": 0,
/*   376 */                                 "endlineno": 10,
/*   377 */                                 "col_endoffset": 1}],
/*   378 */                             "value": {
/*   379 */                                 "n": {
/*   380 */                                     "v": 10
/*   381 */                                 },
/*   382 */                                 "lineno": 10,
/*   383 */                                 "col_offset": 16,
/*   384 */                                 "endlineno": 10,
/*   385 */                                 "col_endoffset": 18
/*   386 */                             },
/*   387 */                             "lineno": 10,
/*   388 */                             "col_offset": 0,
/*   389 */                             "endlineno": 10,
/*   390 */                             "col_endoffset": 1
/*   391 */                         });
/*   392 */                     }
/*   393 */                     currLineNo = 10;
/*   394 */                     currColNo = 0;
/*   395 */ 
/*   396 */                     var $loadname136 = $loc.s !== undefined ? $loc.s : Sk.misceval.loadname('s', $gbl);;
/*   397 */                     $ret = Sk.abstr.sattr($loadname136, 'other_value', new Sk.builtin.int_(10), true);
/*   398 */                     $blk = 2; /* allowing case fallthrough */
/*   399 */                 case 2:
/*   400 */                     /* --- function return or resume suspension --- */
/*   401 */                     if ($ret && $ret.$isSuspension) {
/*   402 */                         return $saveSuspension($ret, './my_test.py', 10, 0);
/*   403 */                     }
/*   404 */                     return $loc;
/*   405 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   406 */                 }
/*   407 */             } catch (err) {
/*   408 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   409 */                     err = new Sk.builtin.ExternalError(err);
/*   410 */                 }
/*   411 */                 err.traceback.push({
/*   412 */                     lineno: $currLineNo,
/*   413 */                     colno: $currColNo,
/*   414 */                     filename: './my_test.py'
/*   415 */                 });
/*   416 */                 if ($exc.length > 0) {
/*   417 */                     $err = err;
/*   418 */                     $blk = $exc.pop();
/*   419 */                     continue;
/*   420 */                 } else {
/*   421 */                     throw err;
/*   422 */                 }
/*   423 */             }
/*   424 */         }
/*   425 */     });
/*   426 */     var $scope121 = (function $Stack$class_outer($globals, $locals, $rest) {
/*   427 */         var $gbl = $globals,
/*   428 */             $loc = $locals;
/*   429 */         (function $Stack$_closure() {
/*   430 */             var $blk = 0,
/*   431 */                 $exc = [],
/*   432 */                 $ret = undefined,
/*   433 */                 $currLineNo = undefined,
/*   434 */                 $currColNo = undefined;
/*   435 */             if (typeof Sk.execStart === 'undefined') {
/*   436 */                 Sk.execStart = Date.now()
/*   437 */             }
/*   438 */             while (true) {
/*   439 */                 try {
/*   440 */                     var $dateNow = Date.now();
/*   441 */                     if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   442 */                         throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   443 */                     }
/*   444 */                     switch ($blk) {
/*   445 */                     case 0:
/*   446 */                         /* --- class entry --- */
/*   447 */                         //
/*   448 */                         // line 2:
/*   449 */                         //     def __init__(self):
/*   450 */                         //     ^
/*   451 */                         //
/*   452 */                         Sk.currLineNo = 2;
/*   453 */                         Sk.currColNo = 4;
/*   454 */ 
/*   455 */ 
/*   456 */                         Sk.currFilename = './my_test.py';
/*   457 */ 
/*   458 */ 
/*   459 */                         if (typeof Sk.afterSingleExecution == 'function') {
/*   460 */                             Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename, 'FunctionDef', {
/*   461 */                                 "name": {
/*   462 */                                     "v": "__init__",
/*   463 */                                     "$savedHash_": {
/*   464 */                                         "v": 3
/*   465 */                                     }
/*   466 */                                 },
/*   467 */                                 "args": {
/*   468 */                                     "args": [{
/*   469 */                                         "id": {
/*   470 */                                             "v": "self"
/*   471 */                                         },
/*   472 */                                         "lineno": 2,
/*   473 */                                         "col_offset": 17,
/*   474 */                                         "endlineno": 2,
/*   475 */                                         "col_endoffset": 21}],
/*   476 */                                     "vararg": null,
/*   477 */                                     "kwarg": null,
/*   478 */                                     "defaults": []
/*   479 */                                 },
/*   480 */                                 "body": [{
/*   481 */                                     "targets": [{
/*   482 */                                         "value": {
/*   483 */                                             "id": {
/*   484 */                                                 "v": "self"
/*   485 */                                             },
/*   486 */                                             "lineno": 3,
/*   487 */                                             "col_offset": 8,
/*   488 */                                             "endlineno": 3,
/*   489 */                                             "col_endoffset": 12
/*   490 */                                         },
/*   491 */                                         "attr": {
/*   492 */                                             "v": "value"
/*   493 */                                         },
/*   494 */                                         "lineno": 3,
/*   495 */                                         "col_offset": 8,
/*   496 */                                         "endlineno": 3,
/*   497 */                                         "col_endoffset": 12}],
/*   498 */                                     "value": {
/*   499 */                                         "n": {
/*   500 */                                             "v": 5
/*   501 */                                         },
/*   502 */                                         "lineno": 3,
/*   503 */                                         "col_offset": 21,
/*   504 */                                         "endlineno": 3,
/*   505 */                                         "col_endoffset": 22
/*   506 */                                     },
/*   507 */                                     "lineno": 3,
/*   508 */                                     "col_offset": 8,
/*   509 */                                     "endlineno": 3,
/*   510 */                                     "col_endoffset": 12}],
/*   511 */                                 "decorator_list": [],
/*   512 */                                 "lineno": 2,
/*   513 */                                 "col_offset": 4,
/*   514 */                                 "endlineno": 2,
/*   515 */                                 "col_endoffset": 7,
/*   516 */                                 "scopeId": 20
/*   517 */                             });
/*   518 */                         }
/*   519 */                         currLineNo = 2;
/*   520 */                         currColNo = 4;
/*   521 */ 
/*   522 */                         $scope122.co_name = new Sk.builtins['str']('__init__');
/*   523 */                         $scope122.co_varnames = ['self'];
/*   524 */                         var $funcobj124 = new Sk.builtins['function']($scope122, $gbl);
/*   525 */                         $loc.__init__ = $funcobj124;
/*   526 */                         //
/*   527 */                         // line 4:
/*   528 */                         //     def __str__(self):
/*   529 */                         //     ^
/*   530 */                         //
/*   531 */                         Sk.currLineNo = 4;
/*   532 */                         Sk.currColNo = 4;
/*   533 */ 
/*   534 */ 
/*   535 */                         Sk.currFilename = './my_test.py';
/*   536 */ 
/*   537 */ 
/*   538 */                         if (typeof Sk.afterSingleExecution == 'function') {
/*   539 */                             Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename, 'FunctionDef', {
/*   540 */                                 "name": {
/*   541 */                                     "v": "__str__"
/*   542 */                                 },
/*   543 */                                 "args": {
/*   544 */                                     "args": [{
/*   545 */                                         "id": {
/*   546 */                                             "v": "self"
/*   547 */                                         },
/*   548 */                                         "lineno": 4,
/*   549 */                                         "col_offset": 16,
/*   550 */                                         "endlineno": 4,
/*   551 */                                         "col_endoffset": 20}],
/*   552 */                                     "vararg": null,
/*   553 */                                     "kwarg": null,
/*   554 */                                     "defaults": []
/*   555 */                                 },
/*   556 */                                 "body": [{
/*   557 */                                     "value": {
/*   558 */                                         "s": {
/*   559 */                                             "v": "test"
/*   560 */                                         },
/*   561 */                                         "lineno": 5,
/*   562 */                                         "col_offset": 15,
/*   563 */                                         "endlineno": 5,
/*   564 */                                         "col_endoffset": 21
/*   565 */                                     },
/*   566 */                                     "lineno": 5,
/*   567 */                                     "col_offset": 8,
/*   568 */                                     "endlineno": 5,
/*   569 */                                     "col_endoffset": 14}],
/*   570 */                                 "decorator_list": [],
/*   571 */                                 "lineno": 4,
/*   572 */                                 "col_offset": 4,
/*   573 */                                 "endlineno": 4,
/*   574 */                                 "col_endoffset": 7,
/*   575 */                                 "scopeId": 21
/*   576 */                             });
/*   577 */                         }
/*   578 */                         currLineNo = 4;
/*   579 */                         currColNo = 4;
/*   580 */ 
/*   581 */                         $scope125.co_name = new Sk.builtins['str']('__str__');
/*   582 */                         $scope125.co_varnames = ['self'];
/*   583 */                         var $funcobj128 = new Sk.builtins['function']($scope125, $gbl);
/*   584 */                         $loc.__str__ = $funcobj128;
/*   585 */                         //
/*   586 */                         // line 6:
/*   587 */                         //     def __repr__(self):
/*   588 */                         //     ^
/*   589 */                         //
/*   590 */                         Sk.currLineNo = 6;
/*   591 */                         Sk.currColNo = 4;
/*   592 */ 
/*   593 */ 
/*   594 */                         Sk.currFilename = './my_test.py';
/*   595 */ 
/*   596 */ 
/*   597 */                         if (typeof Sk.afterSingleExecution == 'function') {
/*   598 */                             Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename, 'FunctionDef', {
/*   599 */                                 "name": {
/*   600 */                                     "v": "__repr__"
/*   601 */                                 },
/*   602 */                                 "args": {
/*   603 */                                     "args": [{
/*   604 */                                         "id": {
/*   605 */                                             "v": "self"
/*   606 */                                         },
/*   607 */                                         "lineno": 6,
/*   608 */                                         "col_offset": 17,
/*   609 */                                         "endlineno": 6,
/*   610 */                                         "col_endoffset": 21}],
/*   611 */                                     "vararg": null,
/*   612 */                                     "kwarg": null,
/*   613 */                                     "defaults": []
/*   614 */                                 },
/*   615 */                                 "body": [{
/*   616 */                                     "value": {
/*   617 */                                         "s": {
/*   618 */                                             "v": "alpha"
/*   619 */                                         },
/*   620 */                                         "lineno": 7,
/*   621 */                                         "col_offset": 15,
/*   622 */                                         "endlineno": 7,
/*   623 */                                         "col_endoffset": 22
/*   624 */                                     },
/*   625 */                                     "lineno": 7,
/*   626 */                                     "col_offset": 8,
/*   627 */                                     "endlineno": 7,
/*   628 */                                     "col_endoffset": 14}],
/*   629 */                                 "decorator_list": [],
/*   630 */                                 "lineno": 6,
/*   631 */                                 "col_offset": 4,
/*   632 */                                 "endlineno": 6,
/*   633 */                                 "col_endoffset": 7,
/*   634 */                                 "scopeId": 22
/*   635 */                             });
/*   636 */                         }
/*   637 */                         currLineNo = 6;
/*   638 */                         currColNo = 4;
/*   639 */ 
/*   640 */                         $scope129.co_name = new Sk.builtins['str']('__repr__');
/*   641 */                         $scope129.co_varnames = ['self'];
/*   642 */                         var $funcobj132 = new Sk.builtins['function']($scope129, $gbl);
/*   643 */                         $loc.__repr__ = $funcobj132;
/*   644 */                         return;
/*   645 */                         throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   646 */                     }
/*   647 */                 } catch (err) {
/*   648 */                     if (!(err instanceof Sk.builtin.BaseException)) {
/*   649 */                         err = new Sk.builtin.ExternalError(err);
/*   650 */                     }
/*   651 */                     err.traceback.push({
/*   652 */                         lineno: $currLineNo,
/*   653 */                         colno: $currColNo,
/*   654 */                         filename: './my_test.py'
/*   655 */                     });
/*   656 */                     if ($exc.length > 0) {
/*   657 */                         $err = err;
/*   658 */                         $blk = $exc.pop();
/*   659 */                         continue;
/*   660 */                     } else {
/*   661 */                         throw err;
/*   662 */                     }
/*   663 */                 }
/*   664 */             }
/*   665 */         }).apply(null, $rest);
/*   666 */     });
/*   667 */     var $scope122 = (function $__init__123$(self) {
/*   668 */         var self, self;
/*   669 */         var $wakeFromSuspension = function() {
/*   670 */             var susp = $scope122.$wakingSuspension;
/*   671 */             delete $scope122.$wakingSuspension;
/*   672 */             $blk = susp.$blk;
/*   673 */             $loc = susp.$loc;
/*   674 */             $gbl = susp.$gbl;
/*   675 */             $exc = susp.$exc;
/*   676 */             $err = susp.$err;
/*   677 */             $currLineNo = susp.$lineno;
/*   678 */             $currColNo = susp.$colno;
/*   679 */             Sk.lastYield = Date.now();
/*   680 */             self = susp.$tmps.self;
/*   681 */             try {
/*   682 */                 $ret = susp.child.resume();
/*   683 */             } catch (err) {
/*   684 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   685 */                     err = new Sk.builtin.ExternalError(err);
/*   686 */                 }
/*   687 */                 err.traceback.push({
/*   688 */                     lineno: $currLineNo,
/*   689 */                     colno: $currColNo,
/*   690 */                     filename: './my_test.py'
/*   691 */                 });
/*   692 */                 if ($exc.length > 0) {
/*   693 */                     $err = err;
/*   694 */                     $blk = $exc.pop();
/*   695 */                 } else {
/*   696 */                     throw err;
/*   697 */                 }
/*   698 */             }
/*   699 */         };
/*   700 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   701 */             var susp = new Sk.misceval.Suspension();
/*   702 */             susp.child = $child;
/*   703 */             susp.resume = function() {
/*   704 */                 $scope122.$wakingSuspension = susp;
/*   705 */                 return $scope122();
/*   706 */             };
/*   707 */             susp.data = susp.child.data;
/*   708 */             susp.$blk = $blk;
/*   709 */             susp.$loc = $loc;
/*   710 */             susp.$gbl = $gbl;
/*   711 */             susp.$exc = $exc;
/*   712 */             susp.$err = $err;
/*   713 */             susp.$filename = $filename;
/*   714 */             susp.$lineno = $lineno;
/*   715 */             susp.$colno = $colno;
/*   716 */             susp.optional = susp.child.optional;
/*   717 */             susp.$tmps = {
/*   718 */                 "self": self
/*   719 */             };
/*   720 */             return susp;
/*   721 */         };
/*   722 */         var $blk = 0,
/*   723 */             $exc = [],
/*   724 */             $loc = {},
/*   725 */             $gbl = this,
/*   726 */             $err = undefined,
/*   727 */             $ret = undefined,
/*   728 */             $currLineNo = undefined,
/*   729 */             $currColNo = undefined;
/*   730 */         if (typeof Sk.execStart === 'undefined') {
/*   731 */             Sk.execStart = Date.now()
/*   732 */         }
/*   733 */         if (typeof Sk.lastYield === 'undefined') {
/*   734 */             Sk.lastYield = Date.now()
/*   735 */         }
/*   736 */         if ($scope122.$wakingSuspension !== undefined) {
/*   737 */             $wakeFromSuspension();
/*   738 */         } else {
/*   739 */             Sk.builtin.pyCheckArgs("__init__", arguments, 1, 1, false, false);
/*   740 */         }
/*   741 */         while (true) {
/*   742 */             try {
/*   743 */                 var $dateNow = Date.now();
/*   744 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   745 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   746 */                 }
/*   747 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   748 */                     var $susp = $saveSuspension({
/*   749 */                         data: {
/*   750 */                             type: 'Sk.yield'
/*   751 */                         },
/*   752 */                         resume: function() {}
/*   753 */                     }, './my_test.py', $currLineNo, $currColNo);
/*   754 */                     $susp.$blk = $blk;
/*   755 */                     $susp.optional = true;
/*   756 */                     return $susp;
/*   757 */                 }
/*   758 */                 switch ($blk) {
/*   759 */                 case 0:
/*   760 */                     /* --- codeobj entry --- */
/*   761 */                     if (self === undefined) {
/*   762 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   763 */                     }
/*   764 */ 
/*   765 */                     //
/*   766 */                     // line 3:
/*   767 */                     //         self.value = 5
/*   768 */                     //         ^
/*   769 */                     //
/*   770 */                     Sk.currLineNo = 3;
/*   771 */                     Sk.currColNo = 8;
/*   772 */ 
/*   773 */ 
/*   774 */                     Sk.currFilename = './my_test.py';
/*   775 */ 
/*   776 */ 
/*   777 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   778 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename, 'Assign', {
/*   779 */                             "targets": [{
/*   780 */                                 "value": {
/*   781 */                                     "id": {
/*   782 */                                         "v": "self"
/*   783 */                                     },
/*   784 */                                     "lineno": 3,
/*   785 */                                     "col_offset": 8,
/*   786 */                                     "endlineno": 3,
/*   787 */                                     "col_endoffset": 12
/*   788 */                                 },
/*   789 */                                 "attr": {
/*   790 */                                     "v": "value"
/*   791 */                                 },
/*   792 */                                 "lineno": 3,
/*   793 */                                 "col_offset": 8,
/*   794 */                                 "endlineno": 3,
/*   795 */                                 "col_endoffset": 12}],
/*   796 */                             "value": {
/*   797 */                                 "n": {
/*   798 */                                     "v": 5
/*   799 */                                 },
/*   800 */                                 "lineno": 3,
/*   801 */                                 "col_offset": 21,
/*   802 */                                 "endlineno": 3,
/*   803 */                                 "col_endoffset": 22
/*   804 */                             },
/*   805 */                             "lineno": 3,
/*   806 */                             "col_offset": 8,
/*   807 */                             "endlineno": 3,
/*   808 */                             "col_endoffset": 12
/*   809 */                         });
/*   810 */                     }
/*   811 */                     currLineNo = 3;
/*   812 */                     currColNo = 8;
/*   813 */ 
/*   814 */                     if (self === undefined) {
/*   815 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   816 */                     }
/*   817 */                     $ret = Sk.abstr.sattr(self, 'value', new Sk.builtin.int_(5), true);
/*   818 */                     $blk = 1; /* allowing case fallthrough */
/*   819 */                 case 1:
/*   820 */                     /* --- function return or resume suspension --- */
/*   821 */                     if ($ret && $ret.$isSuspension) {
/*   822 */                         return $saveSuspension($ret, './my_test.py', 3, 8);
/*   823 */                     }
/*   824 */                     return Sk.builtin.none.none$;
/*   825 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   826 */                 }
/*   827 */             } catch (err) {
/*   828 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   829 */                     err = new Sk.builtin.ExternalError(err);
/*   830 */                 }
/*   831 */                 err.traceback.push({
/*   832 */                     lineno: $currLineNo,
/*   833 */                     colno: $currColNo,
/*   834 */                     filename: './my_test.py'
/*   835 */                 });
/*   836 */                 if ($exc.length > 0) {
/*   837 */                     $err = err;
/*   838 */                     $blk = $exc.pop();
/*   839 */                     continue;
/*   840 */                 } else {
/*   841 */                     throw err;
/*   842 */                 }
/*   843 */             }
/*   844 */         }
/*   845 */     });
/*   846 */     var $scope125 = (function $__str__126$(self) {
/*   847 */         var self;
/*   848 */         var $wakeFromSuspension = function() {
/*   849 */             var susp = $scope125.$wakingSuspension;
/*   850 */             delete $scope125.$wakingSuspension;
/*   851 */             $blk = susp.$blk;
/*   852 */             $loc = susp.$loc;
/*   853 */             $gbl = susp.$gbl;
/*   854 */             $exc = susp.$exc;
/*   855 */             $err = susp.$err;
/*   856 */             $currLineNo = susp.$lineno;
/*   857 */             $currColNo = susp.$colno;
/*   858 */             Sk.lastYield = Date.now();
/*   859 */             self = susp.$tmps.self;
/*   860 */             try {
/*   861 */                 $ret = susp.child.resume();
/*   862 */             } catch (err) {
/*   863 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   864 */                     err = new Sk.builtin.ExternalError(err);
/*   865 */                 }
/*   866 */                 err.traceback.push({
/*   867 */                     lineno: $currLineNo,
/*   868 */                     colno: $currColNo,
/*   869 */                     filename: './my_test.py'
/*   870 */                 });
/*   871 */                 if ($exc.length > 0) {
/*   872 */                     $err = err;
/*   873 */                     $blk = $exc.pop();
/*   874 */                 } else {
/*   875 */                     throw err;
/*   876 */                 }
/*   877 */             }
/*   878 */         };
/*   879 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*   880 */             var susp = new Sk.misceval.Suspension();
/*   881 */             susp.child = $child;
/*   882 */             susp.resume = function() {
/*   883 */                 $scope125.$wakingSuspension = susp;
/*   884 */                 return $scope125();
/*   885 */             };
/*   886 */             susp.data = susp.child.data;
/*   887 */             susp.$blk = $blk;
/*   888 */             susp.$loc = $loc;
/*   889 */             susp.$gbl = $gbl;
/*   890 */             susp.$exc = $exc;
/*   891 */             susp.$err = $err;
/*   892 */             susp.$filename = $filename;
/*   893 */             susp.$lineno = $lineno;
/*   894 */             susp.$colno = $colno;
/*   895 */             susp.optional = susp.child.optional;
/*   896 */             susp.$tmps = {
/*   897 */                 "self": self
/*   898 */             };
/*   899 */             return susp;
/*   900 */         };
/*   901 */         var $blk = 0,
/*   902 */             $exc = [],
/*   903 */             $loc = {},
/*   904 */             $gbl = this,
/*   905 */             $err = undefined,
/*   906 */             $ret = undefined,
/*   907 */             $currLineNo = undefined,
/*   908 */             $currColNo = undefined;
/*   909 */         if (typeof Sk.execStart === 'undefined') {
/*   910 */             Sk.execStart = Date.now()
/*   911 */         }
/*   912 */         if (typeof Sk.lastYield === 'undefined') {
/*   913 */             Sk.lastYield = Date.now()
/*   914 */         }
/*   915 */         if ($scope125.$wakingSuspension !== undefined) {
/*   916 */             $wakeFromSuspension();
/*   917 */         } else {
/*   918 */             Sk.builtin.pyCheckArgs("__str__", arguments, 1, 1, false, false);
/*   919 */         }
/*   920 */         while (true) {
/*   921 */             try {
/*   922 */                 var $dateNow = Date.now();
/*   923 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*   924 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*   925 */                 }
/*   926 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*   927 */                     var $susp = $saveSuspension({
/*   928 */                         data: {
/*   929 */                             type: 'Sk.yield'
/*   930 */                         },
/*   931 */                         resume: function() {}
/*   932 */                     }, './my_test.py', $currLineNo, $currColNo);
/*   933 */                     $susp.$blk = $blk;
/*   934 */                     $susp.optional = true;
/*   935 */                     return $susp;
/*   936 */                 }
/*   937 */                 switch ($blk) {
/*   938 */                 case 0:
/*   939 */                     /* --- codeobj entry --- */
/*   940 */                     if (self === undefined) {
/*   941 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*   942 */                     }
/*   943 */ 
/*   944 */                     //
/*   945 */                     // line 5:
/*   946 */                     //         return 'test'
/*   947 */                     //         ^
/*   948 */                     //
/*   949 */                     Sk.currLineNo = 5;
/*   950 */                     Sk.currColNo = 8;
/*   951 */ 
/*   952 */ 
/*   953 */                     Sk.currFilename = './my_test.py';
/*   954 */ 
/*   955 */ 
/*   956 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*   957 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename, 'Return_', {
/*   958 */                             "value": {
/*   959 */                                 "s": {
/*   960 */                                     "v": "test"
/*   961 */                                 },
/*   962 */                                 "lineno": 5,
/*   963 */                                 "col_offset": 15,
/*   964 */                                 "endlineno": 5,
/*   965 */                                 "col_endoffset": 21
/*   966 */                             },
/*   967 */                             "lineno": 5,
/*   968 */                             "col_offset": 8,
/*   969 */                             "endlineno": 5,
/*   970 */                             "col_endoffset": 14
/*   971 */                         });
/*   972 */                     }
/*   973 */                     currLineNo = 5;
/*   974 */                     currColNo = 8;
/*   975 */ 
/*   976 */                     var $str127 = new Sk.builtins['str']('test');
/*   977 */                     return $str127;
/*   978 */                     return Sk.builtin.none.none$;
/*   979 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*   980 */                 }
/*   981 */             } catch (err) {
/*   982 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*   983 */                     err = new Sk.builtin.ExternalError(err);
/*   984 */                 }
/*   985 */                 err.traceback.push({
/*   986 */                     lineno: $currLineNo,
/*   987 */                     colno: $currColNo,
/*   988 */                     filename: './my_test.py'
/*   989 */                 });
/*   990 */                 if ($exc.length > 0) {
/*   991 */                     $err = err;
/*   992 */                     $blk = $exc.pop();
/*   993 */                     continue;
/*   994 */                 } else {
/*   995 */                     throw err;
/*   996 */                 }
/*   997 */             }
/*   998 */         }
/*   999 */     });
/*  1000 */     var $scope129 = (function $__repr__130$(self) {
/*  1001 */         var self;
/*  1002 */         var $wakeFromSuspension = function() {
/*  1003 */             var susp = $scope129.$wakingSuspension;
/*  1004 */             delete $scope129.$wakingSuspension;
/*  1005 */             $blk = susp.$blk;
/*  1006 */             $loc = susp.$loc;
/*  1007 */             $gbl = susp.$gbl;
/*  1008 */             $exc = susp.$exc;
/*  1009 */             $err = susp.$err;
/*  1010 */             $currLineNo = susp.$lineno;
/*  1011 */             $currColNo = susp.$colno;
/*  1012 */             Sk.lastYield = Date.now();
/*  1013 */             self = susp.$tmps.self;
/*  1014 */             try {
/*  1015 */                 $ret = susp.child.resume();
/*  1016 */             } catch (err) {
/*  1017 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1018 */                     err = new Sk.builtin.ExternalError(err);
/*  1019 */                 }
/*  1020 */                 err.traceback.push({
/*  1021 */                     lineno: $currLineNo,
/*  1022 */                     colno: $currColNo,
/*  1023 */                     filename: './my_test.py'
/*  1024 */                 });
/*  1025 */                 if ($exc.length > 0) {
/*  1026 */                     $err = err;
/*  1027 */                     $blk = $exc.pop();
/*  1028 */                 } else {
/*  1029 */                     throw err;
/*  1030 */                 }
/*  1031 */             }
/*  1032 */         };
/*  1033 */         var $saveSuspension = function($child, $filename, $lineno, $colno) {
/*  1034 */             var susp = new Sk.misceval.Suspension();
/*  1035 */             susp.child = $child;
/*  1036 */             susp.resume = function() {
/*  1037 */                 $scope129.$wakingSuspension = susp;
/*  1038 */                 return $scope129();
/*  1039 */             };
/*  1040 */             susp.data = susp.child.data;
/*  1041 */             susp.$blk = $blk;
/*  1042 */             susp.$loc = $loc;
/*  1043 */             susp.$gbl = $gbl;
/*  1044 */             susp.$exc = $exc;
/*  1045 */             susp.$err = $err;
/*  1046 */             susp.$filename = $filename;
/*  1047 */             susp.$lineno = $lineno;
/*  1048 */             susp.$colno = $colno;
/*  1049 */             susp.optional = susp.child.optional;
/*  1050 */             susp.$tmps = {
/*  1051 */                 "self": self
/*  1052 */             };
/*  1053 */             return susp;
/*  1054 */         };
/*  1055 */         var $blk = 0,
/*  1056 */             $exc = [],
/*  1057 */             $loc = {},
/*  1058 */             $gbl = this,
/*  1059 */             $err = undefined,
/*  1060 */             $ret = undefined,
/*  1061 */             $currLineNo = undefined,
/*  1062 */             $currColNo = undefined;
/*  1063 */         if (typeof Sk.execStart === 'undefined') {
/*  1064 */             Sk.execStart = Date.now()
/*  1065 */         }
/*  1066 */         if (typeof Sk.lastYield === 'undefined') {
/*  1067 */             Sk.lastYield = Date.now()
/*  1068 */         }
/*  1069 */         if ($scope129.$wakingSuspension !== undefined) {
/*  1070 */             $wakeFromSuspension();
/*  1071 */         } else {
/*  1072 */             Sk.builtin.pyCheckArgs("__repr__", arguments, 1, 1, false, false);
/*  1073 */         }
/*  1074 */         while (true) {
/*  1075 */             try {
/*  1076 */                 var $dateNow = Date.now();
/*  1077 */                 if ($dateNow - Sk.execStart > Sk.execLimit) {
/*  1078 */                     throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())
/*  1079 */                 }
/*  1080 */                 if ($dateNow - Sk.lastYield > Sk.yieldLimit) {
/*  1081 */                     var $susp = $saveSuspension({
/*  1082 */                         data: {
/*  1083 */                             type: 'Sk.yield'
/*  1084 */                         },
/*  1085 */                         resume: function() {}
/*  1086 */                     }, './my_test.py', $currLineNo, $currColNo);
/*  1087 */                     $susp.$blk = $blk;
/*  1088 */                     $susp.optional = true;
/*  1089 */                     return $susp;
/*  1090 */                 }
/*  1091 */                 switch ($blk) {
/*  1092 */                 case 0:
/*  1093 */                     /* --- codeobj entry --- */
/*  1094 */                     if (self === undefined) {
/*  1095 */                         throw new Sk.builtin.UnboundLocalError('local variable \'self\' referenced before assignment');
/*  1096 */                     }
/*  1097 */ 
/*  1098 */                     //
/*  1099 */                     // line 7:
/*  1100 */                     //         return 'alpha'
/*  1101 */                     //         ^
/*  1102 */                     //
/*  1103 */                     Sk.currLineNo = 7;
/*  1104 */                     Sk.currColNo = 8;
/*  1105 */ 
/*  1106 */ 
/*  1107 */                     Sk.currFilename = './my_test.py';
/*  1108 */ 
/*  1109 */ 
/*  1110 */                     if (typeof Sk.afterSingleExecution == 'function') {
/*  1111 */                         Sk.afterSingleExecution($gbl, Sk.currLineNo, Sk.currColNo, Sk.currFilename, 'Return_', {
/*  1112 */                             "value": {
/*  1113 */                                 "s": {
/*  1114 */                                     "v": "alpha"
/*  1115 */                                 },
/*  1116 */                                 "lineno": 7,
/*  1117 */                                 "col_offset": 15,
/*  1118 */                                 "endlineno": 7,
/*  1119 */                                 "col_endoffset": 22
/*  1120 */                             },
/*  1121 */                             "lineno": 7,
/*  1122 */                             "col_offset": 8,
/*  1123 */                             "endlineno": 7,
/*  1124 */                             "col_endoffset": 14
/*  1125 */                         });
/*  1126 */                     }
/*  1127 */                     currLineNo = 7;
/*  1128 */                     currColNo = 8;
/*  1129 */ 
/*  1130 */                     var $str131 = new Sk.builtins['str']('alpha');
/*  1131 */                     return $str131;
/*  1132 */                     return Sk.builtin.none.none$;
/*  1133 */                     throw new Sk.builtin.SystemError('internal error: unterminated block');
/*  1134 */                 }
/*  1135 */             } catch (err) {
/*  1136 */                 if (!(err instanceof Sk.builtin.BaseException)) {
/*  1137 */                     err = new Sk.builtin.ExternalError(err);
/*  1138 */                 }
/*  1139 */                 err.traceback.push({
/*  1140 */                     lineno: $currLineNo,
/*  1141 */                     colno: $currColNo,
/*  1142 */                     filename: './my_test.py'
/*  1143 */                 });
/*  1144 */                 if ($exc.length > 0) {
/*  1145 */                     $err = err;
/*  1146 */                     $blk = $exc.pop();
/*  1147 */                     continue;
/*  1148 */                 } else {
/*  1149 */                     throw err;
/*  1150 */                 }
/*  1151 */             }
/*  1152 */         }
/*  1153 */     });
/*  1154 */     return $scope120;
/*  1155 */ }();
