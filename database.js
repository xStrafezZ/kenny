const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://emilly:emillydcl@emillybot-gwlxd.gcp.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) return console.log(err);
    console.log(
      `😍 » Kenny fue conectado a la  DataBase(Mongoose) correctamente!`
    );
  }
);
var Schema = mongoose.Schema;

var User = new Schema({
  _id: { type: String },
  timeAdot: {type: String, default: '0000000000000'},
  ration: { type: Number, default: 0},
  petFood: { type: Number, default: 100},
  petSede: { type: Number, default: 100},
  petFelicidade: {type: Number, default: 100},
  pet: {type: Boolean, default: false},
  petType: { type: String, default: "Ninguno"},
  tPet: {type: Number, default: 0},
  petName: {type: String, default: "Ninguno"},
  water: {type: Number, default: 0},
  coins: { type: Number, default: 0 },
  Minerio_Bruto: { type: Number, default: 0 },
  timeMine: { type: String, default: "0000000000000" },
  timeFish: { type: String, default: "000000000000" },
  daily: { type: Number, default: 0 },
  delay: { type: Number, default: 0 },
  ceo: { type: Boolean, default: false },
  admin: { type: Boolean, default: false },
  mod: { type: Boolean, default: false },
  suporte: { type: Boolean, default: false },
  dev: { type: Boolean, default: false },
  designer: { type: Boolean, default: false },
  vip: { type: Boolean, default: false },
  bug_hunter: { type: Boolean, default: false },
  parceiro: { type: Boolean, default: false },
  banido: { type: Boolean, default: false }
});

var Guild = new Schema({
  _id: { type: String, required: true },
  prefix: { type: String, default: "!" },
  welcome_canal: { type: String, default: "Ningunov" },
  welcome_msg: { type: String, default: "Ninguno" },
  welcome_on: { type: Boolean, default: false },
  welcome_embed: { type: Boolean, default: false },
  leave_canal: { type: String, default: "Ninguno" },
  leave_msg: { type: String, default: "Ninguno" },
  leave_on: { type: Boolean, default: false },
  leave_embed: { type: Boolean, default: false },
  autorole: { type: Boolean, default: false },
  autorole_id: { type: String, default: "Ninguno cargo definido" }
});

var Users = mongoose.model("Usuarios", User);
exports.Users = Users;

var Guilds = mongoose.model("Guilds", Guild);
exports.Guilds = Guilds;
