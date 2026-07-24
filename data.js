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
window.TOURNAMENT_DATA=rows.map((x,i)=>({...x,id:i+1,initials:x.name.split(/[\s/]+/).map(n=>n[0]).slice(0,2).join('').toUpperCase(),city:x.members.join(' / '),color:['#ef6a5b','#477bbd','#df9c34','#41a487','#785bb3','#d05b86','#3c879d'][i%7]}));
window.TOURNAMENT_INFO={location:'Mockingbird Lanes / 4870 South 96th Street, Omaha, NE',dates:'July 17-19 and July 24-26, 2026',entry:'$45 per event / $10 All Events',rules:'USBC and TNBA membership required. Teams are capped at 1125. Handicap is 90% of the difference from 210.',senior:'The Senior Division is for bowlers age 55 and over. Senior teams have four bowlers and a 900 cap.',squads:['Fri, Jul 17 - Mixed Doubles: 6:00 PM, 7:30 PM, 9:00 PM if needed','Sat, Jul 18 - Any event: 10:00 AM, 2:00 PM','Sun, Jul 19 - Any event: 10:00 AM, 2:00 PM','Fri, Jul 24 - Any event: 3:00 PM, 7:00 PM','Sat, Jul 25 - Any event: 9:00 AM, 1:00 PM','Sun, Jul 26 - Any event: 9:00 AM, 1:00 PM'],special:'Special squad: 7:00 PM Friday, July 24. A $150 handicapped high-series prize will be paid to one male and one female bowler.',contact:'Omaha TNBA Facebook page / omahatnba@yahoo.com / Julius: (402) 669-4952',leaders:'Marcellus Green, President / Julius Mickel, Tournament Director'};
