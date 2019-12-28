var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet" };
var owl = { character: "Owl" };
var robin = { character: "Christopher Robin" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var bees = { character: "Bees" };
var kanga = { character: "Kanga" };
var eeyore = { character: "Eeyore" };
var heffalumps = { character: "Heffalumps" };

tigger.north = pooh;

pooh.south = tigger;
pooh.east = bees;
pooh.west = piglet;
pooh.north = robin;

bees.west = pooh;
bees.north = rabbit;

piglet.north = owl;
piglet.east = pooh;
piglet.east.east = pooh.east;
piglet.east.south = pooh.south;
piglet.north.east = owl.east;

owl.south = piglet;
owl.east = robin;

robin.north = kanga;
robin.south = pooh;
robin.east = rabbit;
robin.west = owl;

rabbit.west = robin;
rabbit.south = bees;
rabbit.east = gopher;

gopher.west = rabbit;

kanga.south = robin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffalumps;


