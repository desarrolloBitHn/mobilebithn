import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Nav} from 'ionic-angular';
import {Toast} from '@ionic-native/toast';

declare var jquery: any;
declare var $: any;

/**
 * Generated class for the FetchDominiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fetch-dominios',
  templateUrl: 'fetch-dominios.html',
})
export class FetchDominiosPage {
  buscador = "";
  tipoDominio = "Nuevo Registro";
  lista2 = [];
  listadominio1 =
    [
      {
        "caracteristicas": [{"caracteristica": "tachado"}],
        "descripcion": ".biz",
        "id": 17,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 6.04
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 25.64
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 45.24
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 84.44
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 182.44
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".blackfriday",
        "id": 18,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 150.38
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".bz",
        "id": 24,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 31.9
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".ca",
        "id": 25,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 20.14
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".co",
        "id": 26,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 42
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".com",
        "id": 27,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 14.43
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".com.ec",
        "id": 28,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".com.hn",
        "id": 29,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".coop.hn",
        "id": 30,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".ec",
        "id": 31,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".edu.hn",
        "id": 32,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".fin.ec",
        "id": 33,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".hn",
        "id": 34,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".icu",
        "id": 35,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 1.64
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 10.03
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 18.42
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 35.2
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 77.15
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [{"caracteristica": "tachado"}],
        "descripcion": ".info",
        "id": 36,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 4.94
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 23.07
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 41.20
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 77.46
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 168.11
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".info.ec",
        "id": 37,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".med.ec",
        "id": 38,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".mx",
        "id": 39,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 67
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".net",
        "id": 40,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 18.63
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".net.ec",
        "id": 41,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".net.hn",
        "id": 42,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".online",
        "id": 43,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 52.06
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".org",
        "id": 44,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 19.24
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".org.hn",
        "id": 45,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".pro.ec",
        "id": 46,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".tv",
        "id": 47,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 41.98
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": ""
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": ""
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": ""
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": ""
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [{"caracteristica": "tachado"}],
        "descripcion": ".us",
        "id": 48,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 4.39
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 21.19
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 37.99
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 71.59
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 155.59
          }
        ],
        "subtiposervicio": "Nuevo Registro",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".biz",
        "id": 49,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 19.6
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },

      {
        "caracteristicas": [],
        "descripcion": ".blackfriday",
        "id": 50,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 150.38
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".bz",
        "id": 51,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 31.9
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".ca",
        "id": 52,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 20.14
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".co",
        "id": 53,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 42
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".com",
        "id": 54,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 14.43
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".com.ec",
        "id": 55,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".com.hn",
        "id": 56,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".coop.hn",
        "id": 57,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".ec",
        "id": 58,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".edu.hn",
        "id": 59,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".fin.ec",
        "id": 60,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".hn",
        "id": 61,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".icu",
        "id": 62,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 8.39
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 10.03
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 18.42
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 35.2
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 77.15
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".info",
        "id": 63,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 18.13
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".info.ec",
        "id": 64,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".med.ec",
        "id": 65,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".mx",
        "id": 66,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 67
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".net",
        "id": 67,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 18.63
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".net.ec",
        "id": 68,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".net.hn",
        "id": 69,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".online",
        "id": 70,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 52.06
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".org",
        "id": 71,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 19.24
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".org.hn",
        "id": 72,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".pro.ec",
        "id": 73,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".tv",
        "id": 74,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 41.98
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": ""
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": ""
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": ""
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": ""
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".us",
        "id": 75,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 16.8
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 2,
            "inicio": 0,
            "nombre": "2 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 3,
            "inicio": 0,
            "nombre": "3 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": 0,
            "id": 4,
            "inicio": 0,
            "nombre": "5 años",
            "unidad": "año",
            "valor": 0
          },
          {
            "descripcion": [],
            "final": "",
            "id": 5,
            "inicio": 0,
            "nombre": "10 años",
            "unidad": "año",
            "valor": 0
          }
        ],
        "subtiposervicio": "Renovaciones",
        "tiposervicio": "Precio Dominio"
      },


      {
        "caracteristicas": [],
        "descripcion": ".biz",
        "id": 76,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 19.6
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },

      {
        "caracteristicas": [],
        "descripcion": ".blackfriday",
        "id": 77,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 150.38
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".bz",
        "id": 78,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 31.9
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".ca",
        "id": 79,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 20.14
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".co",
        "id": 80,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 42
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".com",
        "id": 81,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 14.43
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".com.ec",
        "id": 82,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".com.hn",
        "id": 83,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".coop.hn",
        "id": 84,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".ec",
        "id": 85,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".edu.hn",
        "id": 86,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".fin.ec",
        "id": 87,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".hn",
        "id": 88,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".icu",
        "id": 89,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 8.39
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".info",
        "id": 90,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 18.13
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".info.ec",
        "id": 91,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".med.ec",
        "id": 92,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".mx",
        "id": 93,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 67
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".net",
        "id": 94,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 18.63
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".net.ec",
        "id": 95,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".net.hn",
        "id": 96,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".online",
        "id": 97,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 52.06
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".org",
        "id": 98,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 19.24
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".org.hn",
        "id": 99,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 57.5
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".pro.ec",
        "id": 100,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 162
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".tv",
        "id": 101,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 41.98
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".us",
        "id": 102,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 16.8
          }
        ],
        "subtiposervicio": "Transferencias",
        "tiposervicio": "Precio Dominio"
      },

      {
        "caracteristicas": [],
        "descripcion": ".biz",
        "id": 103,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 100.8
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },

      {
        "caracteristicas": [],
        "descripcion": ".blackfriday",
        "id": 104,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 186
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".bz",
        "id": 105,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 156
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".ca",
        "id": 106,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 20.14
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".co",
        "id": 107,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 42
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".com",
        "id": 108,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 100.8
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".com.ec",
        "id": 109,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 234
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".com.hn",
        "id": 110,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 67.5
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".coop.hn",
        "id": 111,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 67.5
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".ec",
        "id": 112,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 234
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".edu.hn",
        "id": 113,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 67.5
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".fin.ec",
        "id": 114,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 234
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".hn",
        "id": 115,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 67.5
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".icu",
        "id": 116,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 143.99
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".info",
        "id": 117,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 100.8
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".info.ec",
        "id": 118,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 234
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".med.ec",
        "id": 119,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 234
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".mx",
        "id": 120,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 148.2
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".net",
        "id": 121,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 100.8
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".net.ec",
        "id": 122,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 234
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".net.hn",
        "id": 123,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 67.5
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".online",
        "id": 124,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 187.18
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".org",
        "id": 125,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 100.8
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".org.hn",
        "id": 126,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 67.5
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".pro.ec",
        "id": 127,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 234
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".tv",
        "id": 128,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 100.8
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      },
      {
        "caracteristicas": [],
        "descripcion": ".us",
        "id": 129,
        "imagen": "",
        "nombre": "Dominios",
        "planes": [
          {
            "descripcion": [],
            "final": 0,
            "id": 1,
            "inicio": 0,
            "nombre": "1 año",
            "unidad": "año",
            "valor": 100.8
          }
        ],
        "subtiposervicio": "Restauraciones",
        "tiposervicio": "Precio Dominio"
      }
    ]

  constructor(private toast: Toast, public nav: Nav, public modalCrtl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  Inicio() {
    this.nav.setRoot('InicioPage');
  }

  detalleDominio(parametro) {
    if (!parametro) parametro = {};
    this.navCtrl.push('DetailsRegistroDominioPage', {
      'item': parametro
    });
  }

  cambioRadio(evento) {
    switch (evento) {
      case "Nuevo Registro":
        this.agregarItemLista();
        break;
      case "Transferencias":
        this.agregarItemLista();
        break;
      case "Renovaciones":
        this.agregarItemLista();
        break;
      case "Restauraciones":
        this.agregarItemLista();
        break;
    }
  }

  agregarItemLista(){
    this.lista2 = [];
    for (let i = 0; i < this.listadominio1.length; i++) {
      if (this.listadominio1[i].subtiposervicio == this.tipoDominio) {
        this.lista2.push(this.listadominio1[i]);
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FetchDominiosPage');
  }
}
