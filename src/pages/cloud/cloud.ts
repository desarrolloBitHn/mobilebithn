import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, ModalController} from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
declare var jquery: any;
declare var $: any;
/**
 * Generated class for the CloudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cloud',
  templateUrl: 'cloud.html',
})
export class CloudPage {
database =
  {
    "id": 1,
    "planes": [
                {
                  "id": 1,
                  "tipoplan": "Personal Cloud",
                  "valor": "14.5",
                  "unidad":"mes",
                  "descripcion": [
                                  {
                                    "id": 1,
                                    "descripcion": "2 CPU cores"
                                  },
                                  {
                                    "id": 2,
                                    "descripcion": "Ilimitado Espacio en Disco*"
                                  },
                                  {
                                    "id": 3,
                                    "descripcion": "2 GB RAM"
                                  },
                                  {
                                    "id": 4,
                                    "descripcion": "Ilimitado Bandwidth"
                                  },
                                  {
                                    "id": 5,
                                    "descripcion": "Alojar 1 sitio web"
                                  },
                                  {
                                    "id": 6,
                                    "descripcion": "Almacenamiento de Correo Electrónico*"
                                  }
                                ]
                },
                {
                  "id": 2,
                  "tipoplan": "Business Cloud",
                  "valor": "18",
                  "unidad":"mes",
                  "descripcion": [
                                  {
                                    "id": 1,
                                    "descripcion": "4 CPU cores"
                                  },
                                  {
                                    "id": 2,
                                    "descripcion": "Ilimitado Espacio en Disco*"
                                  },
                                  {
                                    "id": 3,
                                    "descripcion": "4 GB RAM"
                                  },
                                  {
                                    "id": 4,
                                    "descripcion": "Ilimitado Bandwidth"
                                  },
                                  {
                                    "id": 5,
                                    "descripcion": "Alojamiento ilimitado Sitios web"
                                  },
                                  {
                                    "id": 6,
                                    "descripcion": "Almacenamiento de Correo Electrónico*"
                                  }
                                ]
                },
                {
                  "id": 3,
                  "tipoplan": "Pro Cloud",
                  "valor": "27",
                  "unidad":"mes",
                  "descripcion": [
                                  {
                                    "id": 1,
                                    "descripcion": "4 CPU cores"
                                  },
                                  {
                                    "id": 2,
                                    "descripcion": "Ilimitado Espacio en Disco*"
                                  },
                                  {
                                    "id": 3,
                                    "descripcion": "4 GB RAM"
                                  },
                                  {
                                    "id": 4,
                                    "descripcion": "Ilimitado Bandwidth"
                                  },
                                  {
                                    "id": 5,
                                    "descripcion": "Alojamiento ilimitado Sitios web"
                                  },
                                  {
                                    "id": 6,
                                    "descripcion": "Almacenamiento de Correo Electrónico*"
                                  }
                                ]
                }
              ],
    "preguntas": [
                  {
                    "id": 1,
                    "pregunta": "* ¿Cuál es la cantidad de espacio en disco y ancho de banda incluido en mi plan?",
                    "respuesta": "El espacio en disco y ancho de banda es ilimitado, lo que significa que no está definido por una cuota específica en cuando a la cantidad de espacio en disco o ancho de banda. \n\nSin embargo, dicho esto, se requiere que el cliente para ser totalmente compatible con las Condiciones de Uso utilice solamente el espacio en disco y ancho de banda en el funcionamiento operacional normal de un sitio web personal o de pequeña empresa. \n\nPor ejemplo, el almacenamiento de más de 100.000 archivos estaría en violación de nuestras Condiciones de Uso. Por favor, consulte nuestras Condiciones de Uso en nuestro Acuerdo de Cliente para productos de Alojamiento Web o contactarnos para responder cualquier pregunta."
                  },
                  {
                    "id": 2,
                    "pregunta": "¿Qué es Alojamiento en la Nube?",
                    "respuesta": "El alojamiento en la nube es la última forma de alojamiento que se ha vuelto muy popular en los últimos años. El concepto principal del Alojamiento en la nube es divide y vencerás - los recursos necesarios para el mantenimiento de su sitio web se distribuyen en un grupo de servidores que funcionan en conjunto, denominado como la nube. Esto reduce enormemente las posibilidades de tiempos fuera en caso de un mal funcionamiento del servidor."
                  },
                  {
                    "id": 3,
                    "pregunta": "¿Cuál es la diferencia entre Alojamiento en la Nube y Alojamiento Compartido?",
                    "respuesta": "Cuando un sitio web se encuentra alojado en el Alojamiento Compartido, el sitio web se ubica en el mismo servidor con muchos otros sitios web, que van desde unos pocos hasta cientos. Normalmente, en esta configuración, todos comparten recursos dominios, tales como RAM y CPU del mismo servidor. El Alojamiento en la Nube, por otro lado, ofrece capacidad casi ilimitada para manejar los picos de tráfico alto. En la Nube, su sitio web está alojado no sólo en uno sino en varios servidores conectados que trabajan como uno solo. Sus sitios web no dependen de un solo Servidor- incluso si un servidor es inaccesible, se recuperan los datos y se procesan por los otros servidores disponibles sin tiempo de inactividad."
                  },
                  {
                    "id": 4,
                    "pregunta": "¿Qué es Vanish Cache?",
                    "respuesta": "Varnish Cache es un poderoso acelerador de aplicaciones web que puede acelerar un sitio web hasta 1000 por ciento. Varnish se utiliza típicamente para contenido de sitios web con dinámica pesada. Es utilizado por sitios web de alto perfil y alto tráfico como Wikipedia, los sitios de periódicos en línea, tales como The New York Times, The Guardian, The Hindu, Corriere della Sera, las redes sociales y sitios de contenido, tales como Facebook, Twitter, Vimeo, y Tumblr. De los principales sitios de 10K en la web, alrededor de una décima parte hacen uso de este software."
                  },
                  {
                    "id": 5,
                    "pregunta": "¿Qué tan confiable es su Alojamiento en la Nube?",
                    "respuesta": "Nuestro Alojamiento en la Nube ofrece una alta fiabilidad. Los sitios en la Nube distribuyen automáticamente tres copias simétricas de sus datos a través de múltiples dispositivos para garantizar la seguridad y protección. El sitio web está alojado en una partición virtual que extrae sus recursos, como el espacio en el disco, a partir de una amplia red de servidores físicos subyacentes."
                  },
                  {
                    "id": 6,
                    "pregunta": "¿Cuál es la arquitectura usada por su Alojamiento en la Nube?",
                    "respuesta": "Utilizamos Almacenamiento Ceph, lo que da un nivel 3N de redundancia. En informática, Ceph está completamente distribuido sin un solo punto de fallo, escalable a nivel Exabyte, y de libre acceso. Ceph replica los datos y hace que sea tolerante a fallos, entonces no requiere soporte de hardware específico. Como resultado de su diseño, el sistema se cura y gestiona automáticamente, con el objetivo de reducir al mínimo el tiempo de administración y otros gastos."
                  },
                  {
                    "id": 7,
                    "pregunta": "¿Cuál es el límite de CPU y RAM adicionales?",
                    "respuesta": "Hasta 8 GB de RAM y 8 cores pueden ser añadidos a cualquier plan de Alojamiento en la Nube."
                  },
                  {
                    "id": 8,
                    "pregunta": "¿Hay una IP dedicada disponible?",
                    "respuesta": "Sí, con un costo adicional. Usted puede crear un ticket de soporte para obtener una IP dedicada."
                  },
                  {
                    "id": 9,
                    "pregunta": "¿Cómo instalo un certificado SSL en mi sitio web?",
                    "respuesta": "Para instalar un certificado SSL en su alojamiento en la Nube, tiene que contactar al equipo de soporte y ellos lo instalarán por usted."
                  },
                  {
                    "id": 10,
                    "pregunta": "¿Ustedes proveen algún script de un solo clic en el Alojamiento en la Nube?",
                    "respuesta": "Sí, nosotros proveemos una instalación rápida que es accesible desde su cPanel. La instalación rápida le permite instalar y ejecutar varios scripts como Wordpress, Drupal, Joomla, shopping carts like Zencart, Magento y muchos otros de facturación, redes sociales soporte y módulos de chat."
                  },
                  {
                    "id": 11,
                    "pregunta": "¿Es posible un Upgrade/Downgrade?",
                    "respuesta": "No, un upgrade or downgrade no es posible en los planes. De todas formas usted puede comprar RAM y CPU cores adicionales para sus requerimientos."
                  },
                  {
                    "id": 12,
                    "pregunta": "¿Cuál es su política de backup?",
                    "respuesta": "Usted es responsable de sus copias de seguridad y contenido web. Nosotros creamos nuestras propias copias de seguridad semanales, y podemos restaurar su web, correo electrónico y el contenido de la base de datos que usted requiera. Sin embargo, esto no es un procedimiento que completamente confiable para mantener copias de seguridad de su contenido; le recomendamos hacer sus propias copias de seguridad. Usted puede hacer una copia de seguridad de su cPanel o utilizar una solución de copia de seguridad remota."
                  },
                  {
                    "id": 13,
                    "pregunta": "¿Hay una garantía de devolución de dinero?",
                    "respuesta": "Sí, nosotros tenemos una garantía de devolución de 30 días a nuestras cuentas asociadas al Cloud Hosting."
                  }
                ]
  };

  constructor( private firebase: Firebase, public modalCtrl: ModalController, public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
    this.firebase.getToken()
      .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
      .catch(error => console.error('Error getting token', error));
  }

  detalleAbajo(id){
    $('#' + id).slideToggle();
    $( "#icon_"+ id ).toggleClass("ion-md-arrow-round-down");
    $( "#icon_"+ id ).toggleClass("ion-md-arrow-round-up");
  }


  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  cotizar(_item){
    const modal = this.modalCtrl.create('ModalCotizarPage', { item: _item });
    modal.present();
  }

  preguntas(_item){
    const modal = this.modalCtrl.create('ModalPreguntasPage', { item: _item });
    modal.present();
  }

  ionViewDidLoad() {
    console.log(this.database.planes);
    console.log('ionViewDidLoad CloudPage');
  }

}
