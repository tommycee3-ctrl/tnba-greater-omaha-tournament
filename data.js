const rows=[];
const add=(event,division,name,hdcp,games,scratch,total,members=name)=>rows.push({event,division,name,hdcp,games,scratch,total,members:String(members).split(';')});
const load=(event,division,text)=>text.trim().split('\n').forEach(line=>{const [name,hdcp,games,scratch,total,members]=line.split('|');add(event,division,name,+hdcp,games.split(',').map(Number),+scratch,+total,members||name)});
load('Singles','Men',`
Mark Jensen|18|257,249,204|710|728
Kaleb Hansen|0|252,235,236|723|723
Aaron Byars|0|198,265,250|713|713
Jared Quade|117|192,187,216|595|712
Steve Points|0|238,236,232|706|706
Ryan Moats|0|266,224,200|690|690
Scott Allen|54|191,189,233|613|667
Tom Casella|42|181,176,255|612|654
Ryan Moats|0|205,248,193|646|646
Anthony Bruckner|12|194,244,191|629|641
John Quade|0|214,199,227|640|640
Joe Bockert|15|241,205,174|620|635
Kyle Wilkes|0|181,229,212|622|622
Gunner Bosselman|0|234,171,214|619|619
Brad Gilkerson|0|197,187,215|599|599
James Casella|48|213,172,166|551|599
Casey Montgomery|0|181,193,219|593|593
Robert Wright|51|168,171,198|537|588
Kevin Driscoll|0|254,185,141|580|580
TK Terrill|0|225,185,167|577|577
Rich Abboud|0|201,199,174|574|574
Don Birkentall|24|176,185,188|549|573
James Smith|69|162,154,182|498|567
Winston Husband|27|184,181,168|533|560
Thomas Coles|24|173,143,210|526|550`);
load('Singles','Women',`
Tara Wolford|114|152,163,222|537|651
Theresa Jamison|27|170,188,216|574|601
Janay Coles|159|141,112,180|433|592
Nichole Smelser|60|162,200,155|517|577
Tara Wolford|114|133,162,136|431|545
Carlene Taylor|0|151,133,193|477|477`);
load('Doubles','Men',`
Quade/Quade|117|431,372,419|1222|1339|John Quade;Jared Quade
Allen/Wright|105|405,426,379|1210|1315|Scott Allen;Robert Wright
Bruckner/Che|75|402,428,398|1228|1303|Anthony Bruckner;Yue Che
Terrill/Moats|0|449,425,400|1274|1274|TK Terrill;Ryan Moats
Jensen/Husband|45|403,377,423|1203|1248|Mark Jensen;Winston Husband
Casella/Casella|90|422,363,355|1140|1230|Tom Casella;James Casella
Byars/Driscoll|0|367,448,413|1228|1228|Aaron Byars;Kevin Driscoll
Hansen/Bockert|15|428,393,379|1200|1215|Kaleb Hansen;Joe Bockert
Bosselman/Montgomery|0|378,359,444|1181|1181|Gunner Bosselman;Casey Montgomery
Birkentall/Abboud|24|430,396,321|1147|1171|Don Birkentall;Rich Abboud
Gilkerson/Wilkes|0|348,445,374|1167|1167|Brad Gilkerson;Kyle Wilkes
Smith/Coles|93|349,352,314|1015|1108|James Smith;Thomas Coles`);
load('Doubles','Women',`
Wolford/Smelser|174|339,357,382|1078|1252|Tara Wolford;Nichole Smelser
Coles/Jamison|186|345,291,379|1015|1201|Janay Coles;Theresa Jamison
Wolford/Taylor|114|353,316,344|1013|1127|Tara Wolford;Carlene Taylor`);
load('Mixed Doubles','Mixed',`
Erdei/Peters|0|437,450,505|1392|1392|Heather Erdei;Jayson Peters
Ram/Terrill|84|410,395,441|1246|1330|Kristina Ram;TK Terrill
Erdei/Terrill|0|440,427,458|1325|1325|Heather Erdei;TK Terrill
Erdei/Brundage|0|411,423,480|1314|1314|Heather Erdei;Cameron Brundage
May/Brundage|135|373,391,405|1169|1304|Abigail May;Cameron Brundage
Taylor/Byars|0|419,421,461|1301|1301|Carlene Taylor;Aaron Byars
Roth/Roth|81|385,406,414|1205|1286|Ali Roth;Bryan Roth
Wolford/Wilkes|114|386,429,357|1172|1286|Ali Roth;Bryan Roth
Taylor/Brundage|0|393,447,440|1280|1280|Carlene Taylor;Cameron Brundage
Kerres/Terrill|81|443,343,405|1191|1272|Patty Kerres;TK Terrill
Walker/Points|63|400,375,429|1204|1267|Jessica Walker;Steve Points
Smelser/Gilkerson|60|383,430,394|1207|1267|Nichole Smelser;Brad Gilkerson
Erdei/Goodwin|0|430,425,395|1250|1250|Heather Erdei;Chad Goodwin
Walker/Points|63|343,419,410|1172|1235|Jessica Walker;Steve Points
Roth/Roth|81|422,332,377|1131|1212|Ali Roth;Bryan Roth
Chachere/Alexander|336|295,277,302|874|1210|Adrienne Chachere;Elliott Alexander
Mickel/Mickel|120|389,355,328|1072|1192|Ethel Mickel;Julius Mickel
Hurst/Hurst|48|364,355,373|1092|1140|Lisa Hurst;Brandon Hurst
Husband/Husband|123|323,326,361|1010|1133|Wanda Husband;Winston Husband
Taylor/Cottrell|81|346,283,345|974|1055|Carlene Taylor;Dustin Cottrell`);
load('Teams','Men',`
Team A. B.|24|1232,1089,1082|3403|3427|Don Birkentall;Aaron Byars;Rich Abboud;Kevin Driscoll;Jayson Peters
Danno's Crew|258|977,989,927|2893|3151|Adam Wheeler;Joe Muhs;Robert Wright;Scott Allen;Dan Beardsley`);
load('Teams','Mixed',`
Half & Half|72|1144,1071,1215|3430|3502|Nichole Smelser;AJ Bruckner;Gunner Bosselman;Casey Montgomery;Brad Gilkerson
STL-O|174|1158,969,1026|3153|3327|Kym Hickman;Lamar Conner;Kaleb Hansen;Danny Horton;Jimmy Cotton
Greater Greensboro #1|321|995,851,876|2722|3043|Janay Coles;Anthony Guilford;James Smith;Theresa Jamison;Thomas Coles`);
load('All Events','Men',`
Aaron Byars|0|198,265,250,181,238,233,276,223,221|2085|2085
Kaleb Hansen|0|252,235,236,244,194,212,227,160,229|1989|1989
Gunner Bosselman|0|234,171,214,205,191,259,238,227,246|1985|1985
Robert Wright|153|168,171,198,211,202,212,219,214,182|1777|1930
Scott Allen|162|191,189,233,194,224,167,179,180,177|1734|1896
Brad Gilkerson|0|197,187,215,171,202,180,196,264,266|1878|1878
Casey Montgomery|0|181,193,219,173,168,185,247,258,246|1870|1870
AJ Bruckner|36|194,244,191,160,234,198,219,164,224|1828|1864
Kevin Driscoll|0|254,185,141,186,210,180,247,220,228|1851|1851
Rich Abboud|0|201,199,174,205,198,169,244,211,226|1827|1827
James Smith|207|162,154,182,160,188,147,201,179,189|1562|1769
Don Birkentall|72|176,185,188,225,198,152,188,178,159|1649|1721
Thomas Coles|72|173,143,210,189,164,167,179,172,155|1552|1624`);
load('All Events','Women',`
Nichole Smelser|180|162,200,155,210,213,232,244,158,233|1807|1987
Janay Coles|477|141,112,180,153,133,164,158,166,148|1355|1832
Theresa Jamison|81|170,188,216,192,158,215,178,165,222|1704|1785`);
load('Senior','Senior',`
Mark Jensen|18|257,249,204|710|728
Winston Husband|27|184,181,168|533|560
Jensen/Husband|45|403,377,423|1203|1248|Mark Jensen;Winston Husband`);
load("Today's Action",'Open',`
Frank Garner|0|197,163,167,188,154,168|1037|1037
James Watford|0|178,201,173,182,175,235|1144|1144
Duane Johnson|0|212,192,181,165,166,191|1107|1107
Darron Britton|0|146,181,147,194,188,141|997|997
Chuck Holmes|0|182,193,152,214,212,233|1186|1186
Geoffrey Gibson|0|180,258,181,152,190,198|1159|1159
Terrance Bell|0|158,147,210,180,198,220|1113|1113
Ken Hughes|0|203,183,237,192,156,181|1152|1152
Roger Hill|0|157,185,221,196,197,169|1125|1125
Talmage Tidwell|0|189,213,159,185,210,165|1121|1121
Larae Dixon|0|178,228,204,219,226,223|1278|1278
Derrick Hodge|0|190,183,223,213,170,231|1210|1210
Lauren Campbell|0|143,163,150,193,160,214|1023|1023
Eric Mack|0|184,176,185,212,168,157|1082|1082
Carl Williams, Jr.|0|150,148,192,235,150,169|1044|1044
Cheryl Watts|0|167,124,179,138,154,188|950|950
Cassandra Andrews|0|190,194,115,154,129,149|931|931
Bobby Graham|0|186,181,173,171,232,168|1111|1111
Greg Abbott|0|182,211,201,203,205,189|1191|1191
Devera Buckley|0|255,236,192,231,203,150|1267|1267
Willie Brownlee|0|207,200,223,155,181,155|1121|1121
Tracy Hopkins|0|143,157,157,141,117,116|831|831
Linda Cunningham|0|164,213,220,200,206,196|1199|1199
Mike Banks|0|164,158,162,159,163,152|958|958
Kyle Turner|0|208,210,218,162,195,184|1177|1177
Phillip Chester|0|163,183,170,241,167,231|1155|1155
Sara Manuel|0|206,160,179,205,160,204|1114|1114
Laura Chester|0|150,227,190,174,189,192|1122|1122
Gary Jackson|0|187,167,190,165,192,194|1095|1095
Godfrey Wilson|0|225,182,206,190,177,226|1206|1206
Edward Raymond|0|214,197,197,224,180,221|1233|1233
Ryan Moats|0|168,255,233,234,237,195|1322|1322
Tim Robinson III|0|185,183,150,203,234,191|1146|1146
Ron Andrew|0|149,176,163,225,203|916|916
Isaiah Smith|0|214,223,219,290,246,256|1448|1448
Matt Lockhart|0|219,186,185,225,202,279|1296|1296
Tommie Freeman|0|227,210,186,160,177,226|1186|1186
Tashon Latimore|0|207,134,135,175,240,214|1105|1105
Ray Charleston|0|117,210,221,175,163,160|1046|1046
Anthony Tobias|0|235,180,255,192,185,161|1208|1208
Romel Fleming|0|184,173,188,241,212,169|1167|1167
Robbie Webb|0|233,188,169,186,172,244|1192|1192
Rashad Knuckles|0|214,213,268,156,208,216|1275|1275
Charles Thompson|0|201,208,182,180,174,192|1137|1137
Scott Mallon|0|226,247,205,197,244,192|1311|1311
Don Heichel|0|203,209,213,227,161,241|1254|1254
Donald Burton II|0|279,178,246,235,225,193|1356|1356
Andre Watson|0|217,171,179,181,145,188|1081|1081
Lamar Watson|0|288,244,228,234,225,232|1451|1451
Charles Brauch|0|204,196,192,268,144,225|1229|1229
Ron Gore|0|176,175,159,212,128,193|1043|1043
Casey Montgomery|0|214,259,247,184,245,225|1374|1374
Antwon Gardner|0|145,156,186,191,182,232|1092|1092
Trevor McClure|0|202,168,267,180,198,223|1238|1238
Brandon Rice|0|197,220,234,228,238,185|1302|1302
Mike Wade|0|246,239,189,186,178,158|1196|1196
Donald Burton III|0|179,193,180,210,189,184|1135|1135
Brett Ktimminger|0|221,245,216,158,186,225|1251|1251
Vance Lake|0|225,213,247,189,259,205|1338|1338
Shawn Boutte|0|189,184,176,191,183,222|1145|1145
Michael Sanders|0|178,230,150,172,177,215|1122|1122
Marvin Goodwin|0|182,179,149,175,190,221|1096|1096
Kyle Wilkes|0|222,259,244,184,205,245|1359|1359
Johnnie Morton|0|190,207,192,203,161,172|1125|1125
Calvin Wade, Jr.|0|228,196,197,203,227,196|1247|1247
Garland Tobias|0|196,259,247,208,178,265|1353|1353
Edward Loggins|0|279,244,246,185,207,247|1408|1408
Charles Williamson|0|181,214,167,210,225,236|1233|1233
Kenneth Cunningham|0|137,207,199,199,164,163|1069|1069
Thomas Fischer|0|216,143,147,206,237,276|1225|1225
Gabriel Barber IV|0|181,166,165,168,190,180|1050|1050
Lonnie Boyd|0|256,278,279,191,185,156|1345|1345
Dantoine Ballard|0|268,192,223,203,169,190|1245|1245
Justin Chambers|0|189,199,205,179,211,190|1173|1173
Torri Parker|0|193,176,203,190,196,237|1195|1195
Yue Che|126|160,191,183,161,142,226|1063|1189
Tyrone Parker|0|203,243,212,215,150,215|1238|1238
Kevin Duong|0|138,148,182,193,231,214|1106|1106
Terrell Smart|0|237,212,295,203,175,154|1276|1276
Scott Bui|0|182,236,134,163,165,219|1099|1099
Ronald Smart|0|211,235,168,195,235,175|1219|1219
Dave Boocker|0|184,203,243,202,213,204|1249|1249
Hoa Che|0|150,179,188,201,223,154|1095|1095
Carlene Taylor|0|170,210,232|612|612
Cory Schwiesow|0|257,246,231|734|734
Nichole Smelser|60|158,199,174|531|591
Carter Schwiesow|0|268,236,204|708|708
Lisa Hurst|48|279,207,247|733|781
Anthony Allen, Sr.|0|178,144,191|513|513
Tara Wolford|114|151,140,194|485|599
Nick Oden|0|197,185,266|648|648
Abigail May|135|162,147,174|483|618
Ben Lefever|0|189,265,173|627|627
AJ Bruckner|12|269,147,175|591|603`);
const breakdowns={};
const breakdown=(event,name,text)=>breakdowns[`${event}|${name}`]=text.trim().split('\n').map(line=>{const [bowler,games,hdcp='0']=line.split('|');const scores=games.split(',').map(Number),scratch=scores.reduce((a,b)=>a+b,0);return{bowler,games:scores,scratch,hdcp:+hdcp,total:scratch+(+hdcp)}});
breakdown('Teams','Team A. B.',`
Don Birkentall|188,178,159|24
Aaron Byars|276,223,221
Rich Abboud|244,211,226
Kevin Driscoll|247,220,228
Jayson Peters|277,257,248`);
breakdown('Teams',"Danno's Crew",`
Adam Wheeler|166,160,190|57
Joe Muhs|211,220,190|69
Robert Wright|219,214,182|51
Scott Allen|179,180,177|54
Dan Beardsley|202,215,188|27`);
breakdown('Teams','Half & Half',`
Nichole Smelser|244,158,233|60
AJ Bruckner|219,164,224|12
Gunner Bosselman|238,227,246
Casey Montgomery|247,258,246
Brad Gilkerson|196,264,266`);
breakdown('Teams','STL-O',`
Kym Hickman|220,203,163|84
Lamar Conner|206,159,191|90
Kaleb Hansen|227,160,229
Danny Horton|248,244,231
Jimmy Cotton|257,203,212`);
breakdown('Teams','Greater Greensboro #1',`
Janay Coles|158,166,148|159
Anthony Guilford|279,169,162|42
James Smith|201,179,189|69
Theresa Jamison|178,165,222|27
Thomas Coles|179,172,155|24`);
breakdown('Doubles','Quade/Quade',`John Quade|187,214,256\nJared Quade|244,158,163|117`);
breakdown('Doubles','Allen/Wright',`Scott Allen|194,224,167|54\nRobert Wright|211,202,212|51`);
breakdown('Doubles','Bruckner/Che',`Anthony Bruckner|160,234,198|12\nYue Che|242,194,200|63`);
breakdown('Doubles','Terrill/Moats',`TK Terrill|191,181,166\nRyan Moats|258,244,234`);
breakdown('Doubles','Jensen/Husband',`Mark Jensen|215,191,212|18\nWinston Husband|188,186,211|27`);
breakdown('Doubles','Casella/Casella',`Tom Casella|213,191,176|42\nJames Casella|209,172,179|48`);
breakdown('Doubles','Byars/Driscoll',`Aaron Byars|181,238,233\nKevin Driscoll|186,210,180`);
breakdown('Doubles','Hansen/Bockert',`Kaleb Hansen|244,194,212\nJoe Bockert|184,199,167|15`);
breakdown('Doubles','Bosselman/Montgomery',`Gunner Bosselman|205,191,259\nCasey Montgomery|173,168,185`);
breakdown('Doubles','Birkentall/Abboud',`Don Birkentall|225,198,152|24\nRich Abboud|205,198,169`);
breakdown('Doubles','Gilkerson/Wilkes',`Brad Gilkerson|171,202,180\nKyle Wilkes|177,243,194`);
breakdown('Doubles','Smith/Coles',`James Smith|160,188,147|69\nThomas Coles|189,164,167|24`);
breakdown('Doubles','Wolford/Smelser',`Tara Wolford|129,144,150|114\nNichole Smelser|210,213,232|60`);
breakdown('Doubles','Coles/Jamison',`Janay Coles|153,133,164|159\nTheresa Jamison|192,158,215|27`);
breakdown('Doubles','Wolford/Taylor',`Tara Wolford|165,114,143|114\nCarlene Taylor|188,202,201`);
window.TOURNAMENT_DATA=rows.map((x,i)=>({...x,id:i+1,initials:x.name.split(/[\s/]+/).map(n=>n[0]).slice(0,2).join('').toUpperCase(),city:x.members.join(' / '),color:['#ef6a5b','#477bbd','#df9c34','#41a487','#785bb3','#d05b86','#3c879d'][i%7],memberBreakdown:breakdowns[`${x.event}|${x.name}`]||(x.event==='Singles'?[{bowler:x.name,games:x.games,scratch:x.scratch,hdcp:x.hdcp,total:x.total}]:null)}));
window.TOURNAMENT_INFO={location:'Mockingbird Lanes / 4870 South 96th Street, Omaha, NE',dates:'July 17-19 and July 24-26, 2026',entry:'$45 per event / $10 All Events',rules:'USBC and TNBA membership required. Teams are capped at 1125. Handicap is 90% of the difference from 210.',senior:'The Senior Division is for bowlers age 55 and over. Senior teams have four bowlers and a 900 cap.',squads:['Fri, Jul 17 - Mixed Doubles: 6:00 PM, 7:30 PM, 9:00 PM if needed','Sat, Jul 18 - Any event: 10:00 AM, 2:00 PM','Sun, Jul 19 - Any event: 10:00 AM, 2:00 PM','Fri, Jul 24 - Any event: 3:00 PM, 7:00 PM','Sat, Jul 25 - Any event: 9:00 AM, 1:00 PM','Sun, Jul 26 - Any event: 9:00 AM, 1:00 PM'],special:'Special squad: 7:00 PM Friday, July 24. A $150 handicapped high-series prize will be paid to one male and one female bowler.',contact:'Omaha TNBA Facebook page / omahatnba@yahoo.com / Julius: (402) 669-4952',leaders:'Marcellus Green, President / Julius Mickel, Tournament Director'};
