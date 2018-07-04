import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
declare var jquery: any;
declare var $: any;
/**
 * Generated class for the SitioWebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-sitio-web',
  templateUrl: 'sitio-web.html',
})
export class SitioWebPage {
  herramienta = {};
  herramientaWeb;
  basedatos =
      [
        {
          "id": 1,
          "nombre": "Sitio Web",
          "nombreherramienta": "Weebly",
          "descripcion": "Construye el lindo sitio web que siempre has imaginado, sin tener que saber cifrar o ser un experto.",
          "planes": [
            {
              "id": 1,
              "nombre": "Free",
              "descripcion": [
                {
                  "id": 1,
                  "descripcion": "Arrastre y suelte el constructor"
                },
                {
                  "id": 2,
                  "descripcion": "1 página"
                },
                {
                  "id": 3,
                  "descripcion": "Hasta 5 productos"
                },
                {
                  "id": 4,
                  "descripcion": "3% en Tarifa de transacción Weebly"
                }
              ],
              "valor": 0,
              "unidad": "año"
            },
            {
              "id": 2,
              "nombre": "Starter",
              "descripcion": [
                {
                  "id": 1,
                  "descripcion": "Arrastre y suelte el constructor"
                },
                {
                  "id": 2,
                  "descripcion": "Número de páginas ilimitadas"
                },
                {
                  "id": 3,
                  "descripcion": "Pie de página personalizable"
                },
                {
                  "id": 4,
                  "descripcion": "Tu propio favicon"
                },
                {
                  "id": 5,
                  "descripcion": "Hasta 10 productos"
                },
                {
                  "id": 6,
                  "descripcion": "3% en Tarifa de transacción Weebly"
                }
              ],
              "valor": 201.6,
              "unidad": "año"
            },
            {
              "id": 3,
              "nombre": "Pro",
              "descripcion": [
                {
                  "id": 1,
                  "descripcion": "Arrastre y suelte el constructor"
                },
                {
                  "id": 2,
                  "descripcion": "Número de páginas ilimitado"
                },
                {
                  "id": 3,
                  "descripcion": "Pie de página personalizable"
                },
                {
                  "id": 4,
                  "descripcion": "Tu propio favicon"
                },
                {
                  "id": 5,
                  "descripcion": "Reproductores de audio y video HD"
                },
                {
                  "id": 6,
                  "descripcion": "Páginas protegidas con contraseña"
                },
                {
                  "id": 7,
                  "descripcion": "Búsqueda del sitio"
                },
                {
                  "id": 8,
                  "descripcion": "Seguridad SSL"
                },
                {
                  "id": 9,
                  "descripcion": "Hasta 100 Afiliaciones"
                },
                {
                  "id": 10,
                  "descripcion": "Hasta 25 productos"
                },
                {
                  "id": 11,
                  "descripcion": "3% en Tarifa de transacción Weebly"
                }
              ],
              "valor": 288,
              "unidad": "año"
            },
            {
              "id": 4,
              "nombre": "Business",
              "descripcion": [
                {
                  "id": 1,
                  "descripcion": "Arrastre y suelte el constructor"
                },
                {
                  "id": 2,
                  "descripcion": "Número de páginas ilimitadas"
                },
                {
                  "id": 3,
                  "descripcion": "Pie de página personalizable"
                },
                {
                  "id": 4,
                  "descripcion": "Tu propio favicon"
                },
                {
                  "id": 5,
                  "descripcion": "Reproductores de audio y video HD"
                },
                {
                  "id": 6,
                  "descripcion": "Páginas protegidas con contraseña"
                },
                {
                  "id": 7,
                  "descripcion": "Búsqueda del sitio"
                },
                {
                  "id": 8,
                  "descripcion": "Seguridad SSL"
                },
                {
                  "id": 9,
                  "descripcion": "Afiliaciones iliitadas"
                },
                {
                  "id": 10,
                  "descripcion": "Número de productos ilimitados"
                },
                {
                  "id": 11,
                  "descripcion": "0% en Tarifa de transacción Weebly"
                },
                {
                  "id": 12,
                  "descripcion": "Productos digitales"
                },
                {
                  "id": 13,
                  "descripcion": "Gestión del inventario"
                },
                {
                  "id": 14,
                  "descripcion": "Calculadora de envío e impuestos"
                },
                {
                  "id": 15,
                  "descripcion": "Códigos de cupón"
                }
              ],
              "valor": 432,
              "unidad": "año"
            }
          ],
          "preguntas": [
            {
              "id": 1,
              "pregunta": "¿Necesito saber cómo codificar para usar Weebly?",
              "respuesta": "No, tu no lo haces. Weebly ofrece un constructor intuitivo de arrastrar y soltar para su uso. Agrega los elementos que te gustan, gestiona tu tienda en línea e incluso actualiza las publicaciones del blog utilizando el editor de Weebly."
            },
            {
              "id": 2,
              "pregunta": "¿Puedo obtener una garantía de devolución de dinero?",
              "respuesta": "Los planes de Weebly no tienen un período de devolución de dinero. En su lugar, puede probar el plan gratuito y luego actualizar a un pago."
            },
            {
              "id": 3,
              "pregunta": "¿Mi sitio web responderá?",
              "respuesta": "¡Absolutamente! Todos los temas y elementos de Weebly son completamente móviles. Así que sus clientes pueden navegar por su sitio web"
            },
            {
              "id": 4,
              "pregunta": "¿Necesito comprar alojamiento para hospedar mi sitio web?",
              "respuesta": "¡No! Todos los planes vienen con alojamiento incluido. Weebly maneja toda la infraestructura de back-end necesaria para ejecutar su sitio web."
            },
            {
              "id": 5,
              "pregunta": "¿Qué métodos de pago ofrece Weebly?",
              "respuesta": "Weebly ofrece Stripe como el método de pago en el plan Free, Starter y Pro. Mientras que en el plan de negocios puede elegir entre Stripe, Square, Authorize.net y Paypal."
            },
            {
              "id": 6,
              "pregunta": "¿Puedo aumentar el número de productos que puedo vender en mi plan?",
              "respuesta": "Si desea aumentar el número de productos que desea administrar o vender en su sitio web, deberá actualizar su plan."
            },
            {
              "id": 7,
              "pregunta": "¿Consigo cuentas de correo con Weebly?",
              "respuesta": "No, tu no consigues cuentas de correo con Weebly. En cualquier caso, puedes comprar el servicio de cuentas de correo por aparte para tu negocio y usarlo con el mismo dominio"
            }
          ],
          "caracteristicas": [
            {
              "id": 1,
              "caracteristica": "Fácil de arrastrar y soltar editor",
              "descripcion": "No necesita conocimientos de tecnología - Elija una plantilla, arrastrar y soltar elementos, agregar imágenes, texto, videos y obtener en línea al instante para la sección fácil de usar."
            },
            {
              "id": 2,
              "caracteristica": "Alojamiento seguro y gratuito",
              "descripcion": "Concéntrese en lo que es importante. Administrar y hacer crecer su negocio sin preocuparse por tiempos de parada y velocidades de carga."
            },
            {
              "id": 3,
              "caracteristica": "Potentes Herramientas y Plugins",
              "descripcion": "Muestre apagadas sus fotos / videos, SEO optimice su sitio e incluso corrija CSS / HTML. Las herramientas de Weebly le dan un control total de su sitio."
            },
            {
              "id": 4,
              "caracteristica": "Carrito de Compras Integrado y Realizar Pedido",
              "descripcion": "El software del carrito de compras de Weebly se configura automáticamente cuando crea su tienda en línea, para que pueda empezar a vender inmediatamente."
            },
            {
              "id": 5,
              "caracteristica": "Seguimiento de su inventario & amp; Administrar la oferta",
              "descripcion": "Gestione cientos de productos. Mostrar a los clientes el número de elementos restantes y actualizar automáticamente los compradores cuando los artículos no están disponibles."
            },
            {
              "id": 6,
              "caracteristica": "Simplificado Transacciones",
              "descripcion": "Muestre a sus clientes los costos de envío y las tasas de impuestos. Incluso ofrecen códigos de cupón para incentivar a sus compradores y conducir las ventas."
            }
          ],
          "linkprueba": ""
        },
        {
          "id": 2,
          "nombre": "Sitio Web",
          "nombreherramienta": "Constructor de Sitios Web",
          "descripcion": "Cree su propio sitio web de forma instantánea, sin ninguna destreza de codificación o diseño. Elija de más de 100 plantillas o simplemente seleccione y arrastre para personalizar su diseño",
          "planes": [
            {
              "id": 1,
              "nombre": "Personal",
              "descripcion": [
                {
                  "id": 1,
                  "descripcion": "5 Páginas"
                },
                {
                  "id": 2,
                  "descripcion": "Espacio en web de 2 GB"
                },
                {
                  "id": 3,
                  "descripcion": "Transferencia de datos Ilimitado"
                },
                {
                  "id": 4,
                  "descripcion": "10 Cuentas de correo"
                }
              ],
              "valor": 5.98,
              "unidad": "mes"
            },
            {
              "id": 2,
              "nombre": "Económico",
              "descripcion": [
                {
                  "id": 1,
                  "descripcion": "25 Páginas"
                },
                {
                  "id": 2,
                  "descripcion": "Espacio en web de 3 GB"
                },
                {
                  "id": 3,
                  "descripcion": "Transferencia de datos Ilimitado"
                },
                {
                  "id": 4,
                  "descripcion": "10 Cuentas de correo"
                }
              ],
              "valor": 10.78,
              "unidad": "mes"
            },
            {
              "id": 3,
              "nombre": "Premium",
              "descripcion": [
                {
                  "id": 1,
                  "descripcion": "50 Páginas"
                },
                {
                  "id": 2,
                  "descripcion": "Espacio en web de 5 GB"
                },
                {
                  "id": 3,
                  "descripcion": "Transferencia de datos Ilimitado"
                },
                {
                  "id": 4,
                  "descripcion": "10 Cuentas de correo"
                }
              ],
              "valor": 13.47,
              "unidad": "mes"
            },
            {
              "id": 4,
              "nombre": "Pro",
              "descripcion": [
                {
                  "id": 1,
                  "descripcion": "99 Páginas"
                },
                {
                  "id": 2,
                  "descripcion": "Espacio en web de 5 GB"
                },
                {
                  "id": 3,
                  "descripcion": "Transferencia de datos Ilimitado"
                },
                {
                  "id": 4,
                  "descripcion": "10 Cuentas de correo"
                }
              ],
              "valor": 16.16,
              "unidad": "mes"
            }
          ],
          "preguntas": [
            {
              "id": 1,
              "pregunta": "¿Tengo que comprar un paquete de alojamiento web para adquirir un paquete de Constructor de Sitios Web ?",
              "respuesta": "No, usted no tiene que preocuparse por eso. Nuestros paquetes de Constructor de Sitios Web vienen con alojamiento web y de correo gratuito."
            },
            {
              "id": 2,
              "pregunta": "¿Hay una versión demo del Constructor de Sitios Web?",
              "respuesta": "Si, nosotros tenemos una versión demo con la que usted puede intentar antes de adquirir el servicio."
            },
            {
              "id": 3,
              "pregunta": " ¿hay alguna garantía de devolución de dinero en el servicio de Constructor de Sitios Web?",
              "respuesta": "Sí, ofrecemos 30 días de Garantía de devolución de dinero con todos nuestros paquetes de Constructor de Sitios Web"
            },
            {
              "id": 4,
              "pregunta": "¿Que componentes se incluyen en el servicio de Constructor de Sitios Web?",
              "respuesta": "Nuestro servicio incluye los siguientes componentes mas populares: Blog, Image Gallery, PayPal, eBay and Google Maps."
            },
            {
              "id": 5,
              "pregunta": "¿Puedo diseñar o subir mi propio tema?",
              "respuesta": "Si bien no se puede diseñar o subir su propio tema, puede elegir entre más de 180 temas diseñados por expertos. Nuestros temas se pueden utilizar para los sitios web personales, profesionales, así como para comercio electrónico."
            },
            {
              "id": 6,
              "pregunta": "¿Puedo cambiar a un plan superior?",
              "respuesta": "Sí, usted puede cambiar a un plan superior en cualquier momento."
            },
            {
              "id": 7,
              "pregunta": "¿Habrá anuncios en mi sitio?",
              "respuesta": "De ninguna manera! Todos nuestros paquetes de Constructor de Sitios Web son completamente libres de anuncios."
            },
            {
              "id": 8,
              "pregunta": "¿El Constructor de Sitios Web incluye funciones de optimizador de motores de búsqueda - SEO?",
              "respuesta": "Nuestros paquetes de Constructor de Sitios Web viene integrados con una función de optimización de motores de búsqueda, que permite mejorar la visibilidad de un sitio web en los diferentes buscadores."
            },
            {
              "id": 9,
              "pregunta": "Tengo un sitio web con otro proveedor, ¿puedo mover mi sitio web a el Constructor de Sitios Web?",
              "respuesta": "No, usted no puede migrar su sitio web directamente al paquete de Constructor de Sitios Web. Sin embargo, puede mover los archivos del su sitio web descargándolos y luego subiéndolos a su cuenta de Constructor de Sitios Web."
            }
          ],
          "caracteristicas": [
            {
              "id": 1,
              "caracteristica": "Editor Visual Fácil de Usar",
              "descripcion": "Editor en tiempo real - Ver los cambios a medida que los hacen! - Interfaz Intuitiva - No se requieren conocimientos de codificación!"
            },
            {
              "id": 2,
              "caracteristica": "Más de 30 componentes dinámicos",
              "descripcion": "Los componentes dinámicos incluyen galerías de imágenes, Blogs y formularios Web - Se incluye componentes de pago como Paypal y Ebay - Reproductores Sociales para la Integración Social instantánea"
            },
            {
              "id": 3,
              "caracteristica": "180 temas y contadores",
              "descripcion": "Un diseño para cada necesidad - Blog Personal y temas profesionales disponibles - El acceso a 85,000 imágenes - Completamente personalizable"
            },
            {
              "id": 4,
              "caracteristica": "Solución completa de Alojamiento Web",
              "descripcion": "Incluye Alojamiento Web y Alojamiento de correo de gran alcance - Completamente seguro y protegido con una garantía de operatividad del 99,9% - Aloja su Sitio Web en su propio Dominio"
            },
            {
              "id": 6,
              "caracteristica": "Características únicas",
              "descripcion": "Estadísticas de crecimiento del Sitio Web - Portabilidad - Blog - Posicionamiento en buscadores"
            }
          ],
          "linkprueba": "https://www.punto.hn/content.php?action=demo&type=diy"
        },
        {
          "id": 3,
          "nombre": "Sitio Web",
          "nombreherramienta": "Impress.ly",
          "descripcion": "¡Rápidamente cree una aplicación como un sitio web! Utilice contenido social multimedia o comience desde un borrador para configurar su sitio.",
          "planes": [
            {
              "id": 1,
              "nombre": "Free",
              "descripcion": [
                {
                  "id": 1,
                  "descripcion": "HTML 5"
                },
                {
                  "id": 2,
                  "descripcion": "Teléfono inteligente, tableta, escritorio"
                },
                {
                  "id": 3,
                  "descripcion": "Marca de Impressly"
                },
                {
                  "id": 4,
                  "descripcion": "Fuentes sociales + información básica"
                },
                {
                  "id": 5,
                  "descripcion": "Platforma de Comercio Electrónico"
                },
                {
                  "id": 6,
                  "descripcion": "Reservaciones"
                },
                {
                  "id": 7,
                  "descripcion": "Musical"
                },
                {
                  "id": 8,
                  "descripcion": "Blog"
                }
              ],
              "valor": 0,
              "unidad": "mes"
            },
            {
              "id": 2,
              "nombre": "Starter",
              "descripcion": [
                {
                  "id": 1,
                  "descripcion": "HTML 5"
                },
                {
                  "id": 2,
                  "descripcion": "Teléfono inteligente, tableta, escritorio"
                },
                {
                  "id": 3,
                  "descripcion": "Analíticas Básicas"
                },
                {
                  "id": 4,
                  "descripcion": "Fuentes sociales + información básica"
                },
                {
                  "id": 5,
                  "descripcion": "Publicar sitio"
                }
              ],
              "valor": 9,
              "unidad": "mes"
            },
            {
              "id": 3,
              "nombre": "Business",
              "descripcion": [
                {
                  "id": 1,
                  "descripcion": "HTML 5"
                },
                {
                  "id": 2,
                  "descripcion": "Teléfono inteligente, tableta, escritorio"
                },
                {
                  "id": 3,
                  "descripcion": "Analíticas Básicas"
                },
                {
                  "id": 4,
                  "descripcion": "Fuentes sociales + información básica"
                },
                {
                  "id": 5,
                  "descripcion": "Publicar sitio"
                },
                {
                  "id": 6,
                  "descripcion": "Platforma de Comercio Electrónico"
                },
                {
                  "id": 7,
                  "descripcion": "Reservaciones"
                },
                {
                  "id": 8,
                  "descripcion": "Musical"
                },
                {
                  "id": 9,
                  "descripcion": "Blog"
                },
                {
                  "id": 10,
                  "descripcion": "CDN optimizado mundialmente"
                }
              ],
              "valor": 14,
              "unidad": "mes"
            }
          ],
          "preguntas": [
            {
              "id": 1,
              "pregunta": "¿Qué es Impress.ly?",
              "respuesta": "¡Impress.ly es un maravillo Inteligente Constructor de Sitio! Puede automagicamente utilizar el contenido sobre su compañía en internet, y crear un Sitio Web amigable de SEO inmediatamente. También integra contenido de medios sociales como publicaciones, videos, listas de reproducción, eventos, sistemas de citas y más. El ingenioso diseñador elige colores para adaptarse perfectamente a los activos de su marca, haciendo su sitio hermoso. Los sitios Impress.ly igualan la calidad de las aplicaciones móviles nativas, con una sensación nativa multiplataforma y UX."
            },
            {
              "id": 2,
              "pregunta": "¿Puedo obtener garantía de Devolución de Dinero?",
              "respuesta": "Los planes de Impress.ly no tienen periodo de devolución de dinero. En lugar de eso, puede probar nuestro plan gratuito por 30 días y posteriormente cambiar a un plan de pago."
            },
            {
              "id": 3,
              "pregunta": "¿Será el sitio web compatible en múltiples dispositivos?",
              "respuesta": "Sitios web creados mediante Impress.ly serán responsivos y completamente compatibles con móviles, tabletas y equipos de escritorio."
            },
            {
              "id": 4,
              "pregunta": "¿Puedo utilizar el sitio de Impress.ly junto con my sitio web de escritorio ya existente?",
              "respuesta": "¡Si! Usted puede redireccionar todo el tráfico entrante de dispositivos móviles a su sitio móvil, manteniendo su sitio web intacto para los usuarios de equipos de escritorio."
            },
            {
              "id": 5,
              "pregunta": "¿Tengo que comprar un paquete de Alojamiento para alojar mi sitio?",
              "respuesta": "No, todos los planes de Impress.ly vienen con un paquete gratuito de Alojamiento Web."
            },
            {
              "id": 6,
              "pregunta": "¿Puedo descargar el código fuente del sitio web creado utilizando Impress.ly?",
              "respuesta": "No, el código fuente no es accesible, como tampoco descargable."
            },
            {
              "id": 7,
              "pregunta": "Tengo una cantidad grande de imágenes para cargar, ¿Esto ocasionará disminuir la velocidad de mi sitio?",
              "respuesta": "Impress.ly utiliza caching inteligente y paginación de imágenes y el sitio carga imágenes si el visitante abre la página donde se almacenan las imágenes. Entonces esto no sería un problema."
            }
          ],
          "caracteristicas": [
            {
              "id": 1,
              "caracteristica": "Sitio web en minutes",
              "descripcion": "Impress.ly puede crear un sitio web responsivo con su nombre de negocio, página de Facebook, o dirección de sitio web en una cuestión de minutos."
            },
            {
              "id": 2,
              "caracteristica": "Interfaz Arrastrar y Soltar",
              "descripcion": "Elija navegación, fondos, tipos de letra, iconos y otras asombrosas características utilizando la interfaz de arrastrar y soltar. ¡No se requieren habilidades de programación!"
            },
            {
              "id": 3,
              "caracteristica": "Solución Costo-Beneficio",
              "descripcion": "Impress.ly es una solución asequible para crear su sitio web asemejándose a una aplicación. Usted también ahorra costos de mantenimiento al construirlo y mantenerlo usted mismo."
            }
          ],
          "linkprueba": ""
        }
      ];
  constructor(public modalCtrl: ModalController, public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
    this.herramienta = this.basedatos[0];
    this.herramientaWeb=1;
  }

  detalleAbajo(id){
    $('#' + id).slideToggle("slow" );
  }

  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  cotizar(_item){
    const modal = this.modalCtrl.create('ModalCotizarPage', { item: _item });
    modal.present();
  }

    onSegmentChange(valor){
      for(var i=0; i < this.basedatos.length; i++){
        if(this.basedatos[i].id == valor){
          this.herramienta = this.basedatos[i];
        }
      }
    }

  ionViewDidLoad() {

    console.log('ionViewDidLoad SitioWebPage');
  }

}
