import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the FetchAlojamientosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fetch-alojamientos',
  templateUrl: 'fetch-alojamientos.html',
})
export class FetchAlojamientosPage {

  basedatos =
  [
    {
      "id": 1,
      "nombreproducto": "Alojamiento compartido Linux",
      "descripcion": "Perfecto para sitios webs más pequeños y blogs. Incluye cPanel, PHP, Apache y más",
      "tiposervicio": "Alojamiento",
      "subtiposervicio": "Alojamiento compartido",
      "planes": [
        {
          "tipoplan": "Plan Básico",
          "valor": 3.84,
          "descripcion": [
            {
              "1": "Dominio individual"
            },
            {
              "2": "5 GB Espacio en Disco"
            },
            {
              "3": "25 GB Transferencia de datos"
            },
            {
              "4": "20 Cuentas de correo"
            }
          ]
        },
        {
          "tipoplan": "Plan Micro",
          "valor": 9.59,
          "dominio": 1,
          "descripcion": [
            {
              "1": "Dominio individual"
            },
            {
              "2": "20 GB Espacio en Disco"
            },
            {
              "3": "400 GB Transferencia de datos"
            },
            {
              "4": "Ilimitado Cuentas de correo"
            }
          ]
        },
        {
          "tipoplan": "Plan Profesional",
          "valor": 17.16,
          "descripcion": [
            {
              "1": "Dominio individual"
            },
            {
              "2": "40 GB Espacio en Disco"
            },
            {
              "3": "500 GB Transferencia de datos"
            },
            {
              "4": "Ilimitado Cuentas de correo"
            }
          ]
        },
        {
          "tipoplan": "Business",
          "valor": 20.12,
          "descripcion": [
            {
              "1": "3 dominios"
            },
            {
              "2": "Ilimitado Espacio en Disco"
            },
            {
              "3": "Ilimitado Transferencia de datos"
            },
            {
              "4": "Ilimitado Cuentas de correo"
            }
          ]
        }
      ],
      "preguntas": [
        {
          "id": 1,
          "pregunta": "¿Qué es un hosting compartido?",
          "respuesta": "En el Alojamiento Compartido, varios clientes se alojan en un único servidor es decir, los clientes comparten los recursos del servidor. Esto ayuda a reducir el coste, ya que el costo del servidor y sus recursos se distribuyen por todos los clientes / paquetes alojados en el servidor. El alojamiento compartido es perfecto para los sitios web personales, pequeñas y medianas empresas que no requieren todos los recursos de un servidor."
        },
        {
          "id": 2,
          "pregunta": "¿Puedo alojar múltiples sitios web dentro de un plan de Alojamiento compartido?",
          "respuesta": "¡Sí! Nuestros planes de alojamiento compartido Pro y Business le permiten alojar más de un sitio web, mediante la adición de dominios secundarios a través de su panel de control de alojamiento cPanel."
        },
        {
          "id": 3,
          "pregunta": "¿Que significa ilimitado espacio en disco / ancho de banda?",
          "respuesta": "Esto significa que no fijamos un límite en la cantidad de espacio en disco / ancho de banda. \n\nSin embargo, dicho esto, se requiere que el cliente para ser totalmente compatible con las Condiciones de Uso utilice solamente el espacio en disco y ancho de banda en el funcionamiento operacional normal de un sitio web personal o de pequeña empresa. \n\nPor ejemplo, el almacenamiento de más de 100.000 archivos estaría en violación de nuestras Condiciones de Uso. Por favor, consulte nuestras condiciones de servicio en la sección de Acuerdo de Cliente para productos de Alojamiento Web o ponerse en contacto con nosotros para responder cualquier pregunta."
        },
        {
          "id": 4,
          "pregunta": "¿Hay alguna garantía de devolución de dinero?",
          "respuesta": "Sí, ofrecemos una garantía 100% libre de riesgo de 30 días."
        },
        {
          "id": 5,
          "pregunta": "¿El alojamiento de correo electrónico está incluido en mi paquete?",
          "respuesta": "Sí, todos nuestros paquetes de alojamiento permiten Alojar de correo electrónico."
        },
        {
          "id": 6,
          "pregunta": "¿Puedo actualizar a un plan superior?",
          "respuesta": "Sí, se puede actualizar fácilmente a uno de nuestros planes más altos en cualquier momento."
        },
        {
          "id": 7,
          "pregunta": "¿Cuál es su política de backup?",
          "respuesta": "Usted es responsable de sus copias de seguridad y contenido web. Nosotros creamos nuestras propias copias de seguridad semanales, y podemos restaurar su web, correo electrónico y el contenido de la base de datos que usted requiera. Sin embargo, esto no es un procedimiento que completamente confiable para mantener copias de seguridad de su contenido; le recomendamos hacer sus propias copias de seguridad. Usted puede hacer una copia de seguridad desde su Panel administrativo - cPanel o utilizar una solución de copia de seguridad remota."
        },
        {
          "id": 8,
          "pregunta": "¿Incluyen protección contra virus?",
          "respuesta": "Sí, todos nuestros servidores están protegidos por Clam AV."
        },
        {
          "id": 9,
          "pregunta": "¿Puedo dividir mi paquete de alojamiento compartido y revenderlo?",
          "respuesta": "Ya que un paquete de alojamiento compartido no se puede usar para este propósito, se puede revender fácilmente paquetes personalizados con nuestro revendedor de alojamiento."
        },
        {
          "id": 10,
          "pregunta": "¿Ofrecen acceso a SSH?",
          "respuesta": "Sí, ofrecemos acceso SSH en nuestros alojamiento Linux. Sin embargo, la mayoría de las tareas se pueden lograr fácilmente utilizando el Panel de Control de Alojamiento - cPanel."
        },
        {
          "id": 11,
          "pregunta": "¿Con quién me contacto si necesito ayuda?",
          "respuesta": "Nuestro equipo de soporte está siempre a mano para ayudarle."
        }
      ]
    },
    {
      "id": 2,
      "nombreproducto": "Alojamiento compartido Windows",
      "descripcion": "Perfecto para sitios webs más pequeños y blogs. Incluye Plesk, ASP, IIS y más",
      "tiposervicio": "Alojamiento",
      "subtiposervicio": "Alojamiento compartido",
      "planes": [
        {
          "tipoplan": "Plan Básico",
          "valor": 3.84,
          "descripcion": [
            {
              "1": "Dominio individual"
            },
            {
              "2": "5 GB Espacio en Disco"
            },
            {
              "3": "25 GB Transferencia de datos"
            },
            {
              "4": "20 Cuentas de correo"
            }
          ]
        },
        {
          "tipoplan": "Plan Profesional",
          "valor": 17.16,
          "descripcion": [
            {
              "1": "Dominio individual"
            },
            {
              "2": "40 GB Espacio en Disco"
            },
            {
              "3": "500 GB Transferencia de datos"
            },
            {
              "4": "Ilimitado Cuentas de correo"
            }
          ]
        },
        {
          "tipoplan": "Plan Micro profesional",
          "valor": 9.59,
          "descripcion": [
            {
              "1": "Dominio individual"
            },
            {
              "2": "20 GB Espacio en Disco"
            },
            {
              "3": "200 GB Transferencia de datos"
            },
            {
              "4": "Ilimitado Cuentas de correo"
            }
          ]
        },
        {
          "tipoplan": "Business",
          "valor": 20.12,
          "descripcion": [
            {
              "1": "5 dominios"
            },
            {
              "2": "Ilimitado Espacio en Disco"
            },
            {
              "3": "Ilimitado Transferencia de datos"
            },
            {
              "4": "Ilimitado Cuentas de correo"
            }
          ]
        }
      ],
      "preguntas": [
        {
          "id": 1,
          "pregunta": "¿Qué es un hosting compartido?",
          "respuesta": "En el Alojamiento Compartido, varios clientes se alojan en un único servidor es decir, los clientes comparten los recursos del servidor. Esto ayuda a reducir el coste, ya que el costo del servidor y sus recursos se distribuyen por todos los clientes / paquetes alojados en el servidor. El alojamiento compartido es perfecto para los sitios web personales, pequeñas y medianas empresas que no requieren todos los recursos de un servidor."
        },
        {
          "id": 2,
          "pregunta": "¿Puedo alojar múltiples sitios web dentro de un plan de Alojamiento compartido?",
          "respuesta": "¡Sí! Nuestros planes de alojamiento compartido Pro y Business le permiten alojar más de un sitio web, mediante la adición de dominios secundarios a través de su panel de control de alojamiento cPanel."
        },
        {
          "id": 3,
          "pregunta": "¿Que significa ilimitado espacio en disco / ancho de banda?",
          "respuesta": "Esto significa que no fijamos un límite en la cantidad de espacio en disco / ancho de banda. \n\nSin embargo, dicho esto, se requiere que el cliente para ser totalmente compatible con las Condiciones de Uso utilice solamente el espacio en disco y ancho de banda en el funcionamiento operacional normal de un sitio web personal o de pequeña empresa. \n\nPor ejemplo, el almacenamiento de más de 100.000 archivos estaría en violación de nuestras Condiciones de Uso. Por favor, consulte nuestras condiciones de servicio en la sección de Acuerdo de Cliente para productos de Alojamiento Web o ponerse en contacto con nosotros para responder cualquier pregunta."
        },
        {
          "id": 4,
          "pregunta": "¿Hay alguna garantía de devolución de dinero?",
          "respuesta": "Sí, ofrecemos una garantía 100% libre de riesgo de 30 días."
        },
        {
          "id": 5,
          "pregunta": "¿El alojamiento de correo electrónico está incluido en mi paquete?",
          "respuesta": "Sí, todos nuestros paquetes de alojamiento permiten Alojar de correo electrónico."
        },
        {
          "id": 6,
          "pregunta": "¿Puedo actualizar a un plan superior?",
          "respuesta": "Sí, se puede actualizar fácilmente a uno de nuestros planes más altos en cualquier momento."
        },
        {
          "id": 7,
          "pregunta": "¿Cuál es su política de backup?",
          "respuesta": "Usted es responsable de sus copias de seguridad y contenido web. Nosotros creamos nuestras propias copias de seguridad semanales, y podemos restaurar su web, correo electrónico y el contenido de la base de datos que usted requiera. Sin embargo, esto no es un procedimiento que completamente confiable para mantener copias de seguridad de su contenido; le recomendamos hacer sus propias copias de seguridad. Usted puede hacer una copia de seguridad desde su Panel administrativo - cPanel o utilizar una solución de copia de seguridad remota."
        },
        {
          "id": 8,
          "pregunta": "¿Incluyen protección contra virus?",
          "respuesta": "Sí, todos nuestros servidores están protegidos por Clam AV."
        },
        {
          "id": 9,
          "pregunta": "¿Puedo dividir mi paquete de alojamiento compartido y revenderlo?",
          "respuesta": "Ya que un paquete de alojamiento compartido no se puede usar para este propósito, se puede revender fácilmente paquetes personalizados con nuestro revendedor de alojamiento."
        },
        {
          "id": 10,
          "pregunta": "¿Ofrecen acceso a SSH?",
          "respuesta": "Sí, ofrecemos acceso SSH en nuestros alojamiento Linux. Sin embargo, la mayoría de las tareas se pueden lograr fácilmente utilizando el Panel de Control de Alojamiento - cPanel."
        },
        {
          "id": 11,
          "pregunta": "¿Con quién me contacto si necesito ayuda?",
          "respuesta": "Nuestro equipo de soporte está siempre a mano para ayudarle."
        }
      ]
    },
    {
      "id": 3,
      "nombreproducto": "Alojamiento de Wordpress",
      "descripcion": "Una plataforma segura, confiable y potente diseñada para Wordpress",
      "tiposervicio": "Alojamiento",
      "subtiposervicio": "Alojamiento compartido",
      "planes": [
        {
          "tipoplan": "Standar Lite",
          "valor": 8.4,
          "descripcion": [
            {
              "1": "1 instalación Wordpress"
            },
            {
              "2": "Dual Core CPU Core"
            },
            {
              "3": "2 GB RAM"
            },
            {
              "4": "5 GB Almacenamiento"
            },
            {
              "4": "Cuentas ilimitadas de correo electrónico"
            }
          ]
        },
        {
          "tipoplan": "Plan Profesional",
          "valor": 17.16,
          "descripcion": [
            {
              "1": "2 instalaciones Wordpress"
            },
            {
              "2": "Quad Core CPU Core"
            },
            {
              "3": "4 GB RAM"
            },
            {
              "4": "20 GB Almacenamiento"
            },
            {
              "4": "Cuentas ilimitadas de correo electrónico"
            }
          ]
        },
        {
          "tipoplan": "Plan Micro profesional",
          "valor": 9.59,
          "descripcion": [
            {
              "1": "3 instalaciones Wordpress"
            },
            {
              "2": "Hexa Core CPU Core"
            },
            {
              "3": "6 GB RAM"
            },
            {
              "4": "40 GB Almacenamiento"
            },
            {
              "4": "Cuentas ilimitadas de correo electrónico"
            }
          ]
        },
        {
          "tipoplan": "Business",
          "valor": 20.12,
          "descripcion": [
            {
              "1": "5 instalaciones Wordpress"
            },
            {
              "2": "Hexa Core CPU Core"
            },
            {
              "3": "6 GB RAM"
            },
            {
              "4": "40 GB Almacenamiento"
            },
            {
              "4": "Cuentas ilimitadas de correo electrónico"
            }
          ]
        }
      ],
      "preguntas": [
        {
          "id": 1,
          "pregunta": "¿Puedo actualizar mi plan de Hosting de Wordpress?",
          "respuesta": "No, no puede actualizar o desactualizar los planes, pero se pueden mejorar la cantidad de RAM y los núcleos de la CPU para su plan."
        },
        {
          "id": 2,
          "pregunta": "¿Puedo añadir más instalaciones de Wordpress a un plan existente?",
          "respuesta": "No, no puede agregar más instalaciones de Wordpress a ningún plan. El número de instalaciones de Wordpress permanecerá fijo."
        },
        {
          "id": 3,
          "pregunta": "¿Se pueden actualizar los paquetes SiteLock y CodeGuard?",
          "respuesta": "Actualmente, los planes incluidos de SiteLock y CodeGuard no se pueden actualizar."
        },
        {
          "id": 4,
          "pregunta": "¿Puedo usar un servicio de correo electrónico externo con Wordpress Hosting?",
          "respuesta": "Sí, puede utilizar cualquier servicio de correo electrónico de terceros para su dominio. En caso de que utilice los nombres de servidor predeterminados proporcionados con Wordpress Hosting, póngase en contacto con nuestro equipo de asistencia para actualizar los registros DNS correspondientes de su blog."
        },
        {
          "id": 5,
          "pregunta": "¿Puedo usar un certificado existente con mi blog?",
          "respuesta": "No, no puede utilizar un certificado existente. Tendrá que generar un CSR desde el panel de Wordpress Hosting y obtener un certificado emitido que se puede instalar desde el panel."
        },
        {
          "id": 6,
          "pregunta": "¿Wordpress se actualizará automáticamente?",
          "respuesta": "Sí, las actualizaciones principales de Wordpress se habilitarán de forma predeterminada."
        },
        {
          "id": 7,
          "pregunta": "¿Hay un período de devolución de dinero para Wordpress Hosting?",
          "respuesta": "No, Wordpress Hosting no tiene un período de devolución de dinero."
        },
        {
          "id": 8,
          "pregunta": "¿Es MultiSite compatible con Wordpress Hosting?",
          "respuesta": "No, Multisite no es compatible."
        },
        {
          "id": 9,
          "pregunta": "¿Puedo acceder al cPanel para mi plan de alojamiento?",
          "respuesta": "No, el acceso a cPanel no se proporciona con Wordpress Hosting."
        },
        {
          "id": 10,
          "pregunta": "¿Se incluye un certificado SSL con el plan?",
          "respuesta": "No, actualmente no se incluye un certificado SSL con el plan. Usted tendrá que comprar el certificado por separado."
        },
        {
          "id": 11,
          "pregunta": "Cual es la diferencia entre Wordpress Hosting y Wordpress Hosting + planes de Segurity Suite?",
          "respuesta": "Los planes de Wordpress Hosting son planes económicos sin copias de seguridad automáticas ni antimalware. Los planes de Wordpress Hosting + Security tienen las mismas especificaciones que los planes de alojamiento de Wordpress, incluidas copias de seguridad automáticas en la nube y antimalware a un costo diferente."
        }
      ]
    },
    {
      "id": 4,
      "nombreproducto": "VPS Linux KVM",
      "descripcion": "Con la implementación de KVM Hypervisor para una experiencia de servidor dedicada rentable",
      "tiposervicio": "Alojamiento",
      "subtiposervicio": "Servidores",
      "planes": [
        {
          "tipoplan": "Standar",
          "valor": 52.77,
          "descripcion": [
            {
              "1": "2 Cores"
            },
            {
              "2": "2 GB RAM"
            },
            {
              "3": "30 GB Almacenamiento SAN"
            },
            {
              "4": "1 TB Ancho de banda"
            },
            {
              "4": "0 IP Adicional"
            }
          ]
        },
        {
          "tipoplan": "Enhanced",
          "valor": 86.4,
          "descripcion": [
            {
              "1": "2 Cores"
            },
            {
              "2": "4 GB RAM"
            },
            {
              "3": "60 GB Almacenamiento SAN"
            },
            {
              "4": "2 TB Ancho de banda"
            },
            {
              "4": "1 IP Adicional"
            }
          ]
        },
        {
          "tipoplan": "Premium",
          "valor": 142.8,
          "descripcion": [
            {
              "1": "3 Cores"
            },
            {
              "2": "6 GB RAM"
            },
            {
              "3": "120 GB Almacenamiento SAN"
            },
            {
              "4": "3 TB Ancho de banda"
            },
            {
              "4": "1 IP Adicional"
            }
          ]
        },
        {
          "tipoplan": "Elite",
          "valor": 173.4,
          "descripcion": [
            {
              "1": "4 Cores"
            },
            {
              "2": "8 GB RAM"
            },
            {
              "3": "240 GB Almacenamiento SAN"
            },
            {
              "4": "3 TB Ancho de banda"
            },
            {
              "4": "1 IP Adicional"
            }
          ]
        }
      ],
      "preguntas": [
        {
          "id": 1,
          "pregunta": "¿Cuáles son las ventajas de VPS Hosting?",
          "respuesta": "Con VPS Hosting, tiene aislamiento completo. Esto significa que no importa lo que otros usuarios puedan estar haciendo en el servidor, su paquete VPS no será afectado. Con el acceso root, puede instalar las aplicaciones que requiera. VPS también le ofrece recursos garantizados, así que no importa qué, la CPU, RAM, HDD y ancho de banda asignados a su paquete VPS estarán siempre disponibles para sus aplicaciones. Le da todas las características y funciones del servidor dedicado, sin el coste adicional."
        },
        {
          "id": 2,
          "pregunta": "¿Qué es un VPS KVM?",
          "respuesta": "Un KVM (Kernel-based Virtual Machine) es un servidor privado virtual que se encuentra encima de un servidor físico dedicado. Los recursos están dedicados al VPS de KVM y no se comparten con otros usuarios en el dispositivo físico, ofreciendo una gran fiabilidad y rendimiento."
        },
        {
          "id": 3,
          "pregunta": "¿Cuál es la diferencia entre KVM y OpenVZ?",
          "respuesta": "Un KVM es una verdadera virtualización donde el VPS funciona como su propio servidor, independientemente del nodo host. OpenVZ es una virtualización basada en contenedores que se basa en el kernel del nodo host"
        },
        {
          "id": 4,
          "pregunta": "¿Puedo instalar cPanel en mi paquete VPS?",
          "respuesta": "Tenemos un proceso de instalación automatizado configurado en nuestros servidores. Al comprar un KVM VPS, el cPanel se instalará en su paquete. Esto incluye cualquier paquete que elija comprar"
        },
        {
          "id": 5,
          "pregunta": "¿Está disponible una IP dedicada?",
          "respuesta": "Sí, con un coste adicional. Puede crear un ticket de soporte para obtener una IP dedicada."
        },
        {
          "id": 6,
          "pregunta": "¿Qué tipo de soporte ofrecen?",
          "respuesta": "Nuestro equipo de asistencia le ayudará a administrar sus servidores. Para obtener una lista de elementos que apoyamos, consulte las características mencionadas anteriormente"
        },
        {
          "id": 7,
          "pregunta": "¿Cuál es su política de copias de seguridad?",
          "respuesta": "Usted es responsable de sus copias de seguridad y contenido web. Se recomienda que mantenga copias de su contenido seguras y haga sus propias copias de seguridad. Usted puede tomar una copia de seguridad de su cPanel o utilizar una solución de copia de seguridad remota."
        },
        {
          "id": 8,
          "pregunta": "¿Es posible un upgrade/downgrade?",
          "respuesta": "No, un upgrade o downgrade no es posible entre los planes o recursos."
        }
      ]
    },
    {
      "id": 5,
      "nombreproducto": "Servidores dedicados",
      "descripcion": "Hardware dedicado y rendimiento sin fallas; perfecto para sitios web extensos y applicaciones",
      "tiposervicio": "Alojamiento",
      "subtiposervicio": "Servidores",
      "planes": [
        {
          "tipoplan": "DS1",
          "valor": 174,
          "descripcion": [
            {
              "1": "Intel E3-1220LV2"
            },
            {
              "2": "2.30 GHz Dual Core w/HT"
            },
            {
              "3": "4 GB RAM"
            },
            {
              "4": "1000 GB HDD en RAID 1"
            },
            {
              "4": "5 TB Ancho de Banda"
            },
            {
              "5": "2 Gratis IPs"
            }
          ]
        },
        {
          "tipoplan": "DS2",
          "valor": 219,
          "descripcion": [
            {
              "1": "Intel E3-1268LV2"
            },
            {
              "2": "2.50 GHz Quad Core w/HT"
            },
            {
              "3": "4 GB RAM"
            },
            {
              "4": "1000 GB HDD en RAID 1"
            },
            {
              "4": "5 TB Ancho de Banda"
            },
            {
              "5": "2 Gratis IPs"
            }
          ]
        },
        {
          "tipoplan": "DS3",
          "valor": 273,
          "descripcion": [
            {
              "1": "Intel E3-1268LV2"
            },
            {
              "2": "2.50 GHz Quad Core w/HT"
            },
            {
              "3": "8 GB RAM"
            },
            {
              "4": "1000 GB HDD en RAID 1"
            },
            {
              "4": "10 TB Ancho de Banda"
            },
            {
              "5": "2 Gratis IPs"
            }
          ]
        },
        {
          "tipoplan": "DS4",
          "valor": 374,
          "descripcion": [
            {
              "1": "Intel E3-1230V2"
            },
            {
              "2": "3.20 GHz Quad Core w/HT"
            },
            {
              "3": "16 GB RAM"
            },
            {
              "4": "1000 GB HDD en RAID 1"
            },
            {
              "4": "15 TB Ancho de Banda"
            },
            {
              "5": "2 Gratis IPs"
            }
          ]
        }
      ],
      "preguntas": [
        {
          "id": 1,
          "pregunta": "¿Que páneles de control ustedes soportan?",
          "respuesta": "Apoyamos cPanel / WHM, que, si usted lo compra a través de nosotros, será instalado automáticamente en su servidor, y que estará listo en cuestión de minutos. No sólo puede ahorrar en costos de licencias,además usted no tendrá el dolor de cabeza de la instalación cPanel - nosotros nos encargamos de eso para usted."
        },
        {
          "id": 2,
          "pregunta": "¿Ustedes Ofrecen algún panel de Contabilidad?",
          "respuesta": "Sí, ofrecemos WHMCS como un panel de facturación para su servidor dedicado. Usted puede comprar la licencia con nosotros por un costo significativamente más bajo, y luego instalarlo en su servidor dedicado."
        },
        {
          "id": 3,
          "pregunta": "¿Ofrecen Soporte?",
          "respuesta": "Sí lo hacemos. Ofrecemos dos niveles de soporte: Core-administrados y Gestión Completa. Cada servidor viene con soporte Core-administrado, y si usted ha decidido comprar cPanel a través de nosotros, ofrecemos apoyo de Gestión Completa."
        },
        {
          "id": 4,
          "pregunta": "¿Qué nivel de acceso obtengo con mi Servidor Personal?",
          "respuesta": "Usted consigue el acceso root, lo que significa que usted tiene el control administrativo completo de su servidor. Usted puede optar por instalar cualquier software que usted necesita en su servidor, y puede manejar todos los aspectos del mismo."
        },
        {
          "id": 5,
          "pregunta": "¿Cuánto tiempo tomará para que mi servidor esté listo para ser utilizado?",
          "respuesta": "Nuestro sistema de aprovisionamiento exclusivo consigue que su servidor esté listo en cuestión de minutos, lo que garantiza que usted obtenga acceso a su servidor de forma instantánea."
        },
        {
          "id": 6,
          "pregunta": "¿Qué tipo de hardware utilizan?",
          "respuesta": "Utilizamos sólo los mejores - los servidores blade SuperMicro, procesadores Intel Xeon, memoria RAM DDR3 y discos SATA 7200RPM. Nuestros servidores blade consumen muy poca energía y nos ayudan a transferirle este ahorros de costes a usted."
        },
        {
          "id": 7,
          "pregunta": "¿Cuál es la velocidad de la red de puertos / enlace en mi servidor?",
          "respuesta": "Permitimos velocidades de hasta 1 Gbps en cada puerto de red del servidor."
        },
        {
          "id": 8,
          "pregunta": "¿Qué tipo de discos duros ofrecen con cada servidor?",
          "respuesta": "Todos nuestros servidores vienen con un par de 1TB 7200 RPM SATA en RAID 1. RAID 1 significa que cada unidad de disco duro es un espejo de la otra, asegurando que si un disco falla, hay una copia de sus datos en la otra unidad."
        },
        {
          "id": 9,
          "pregunta": "¿Puedo ampliar el almacenamiento en mi servidor?",
          "respuesta": "Sí se puede. Usted puede comprar espacio de almacenamiento adicional en nuestro dispositivo de almacenamiento compartido. Esta será inmediatamente conectado a su servidor como un disco, y en ese momento puede darle formato y montarlo. Ofrecemos diversas opciones, a partir de 50 GB hasta llegar a 500 GB."
        },
        {
          "id": 10,
          "pregunta": "¿Cómo puedo acceder a mi servidor dedicado?",
          "respuesta": "Hay varias maneras de acceder a su servidor:\nSSH - usted puede acceder a su servidor a través de cualquier cliente SSH utilizando las credenciales de root que le proporcionamos.\ncPanel - si ha optado por comprar cPanel de nosotros, usted puede tener acceso y administrar el servidor a través del panel de control cPanel / WHM\nPanel de control de Servidor Dedicado - usted también puede realizar operaciones frecuentes, como detener, iniciar y reiniciar el servidor a través de nuestro panel de control en la web, que viene incluido con cada servidor"
        },
        {
          "id": 11,
          "pregunta": "¿Cuál es el sistema operativo (OS) que se instala en el servidor?",
          "respuesta": "Cada servidor viene instalado con CentOS 6.5, la última versión de un sistema operativo Linux de clase empresarial basado en Red Hat Enterprise Linux (RHEL). También estamos trabajando para añadir más al sistema operativo, a partir de Ubuntu, que estará disponible muy pronto."
        }
      ]
    },
    {
      "id": 6,
      "nombreproducto": "Servidores administrados",
      "descripcion": "Consiga el poder de un servidor dedicado junto a nuestros expertos, quienes le ayudarán a administrar su servidor",
      "tiposervicio": "Alojamiento",
      "subtiposervicio": "Servidores",
      "planes": [
        {
          "tipoplan": "MS1",
          "valor": 367.2,
          "descripcion": [
            {
              "1": "Intel E3-1220LV2"
            },
            {
              "2": "2.30 GHz Dual Core w/HT"
            },
            {
              "3": "4 GB RAM"
            },
            {
              "4": "1000 GB HDD en RAID 1"
            },
            {
              "4": "5 TB Ancho de Banda"
            },
            {
              "5": "2 Gratis IPs"
            }
          ]
        },
        {
          "tipoplan": "MS2",
          "valor": 432,
          "descripcion": [
            {
              "1": "Intel E3-1265LV2"
            },
            {
              "2": "2.50 GHz Quad Core w/HT"
            },
            {
              "3": "4 GB RAM"
            },
            {
              "4": "1000 GB HDD en RAID 1"
            },
            {
              "4": "5 TB Ancho de Banda"
            },
            {
              "5": "2 Gratis IPs"
            }
          ]
        },
        {
          "tipoplan": "MS3",
          "valor": 475.2,
          "descripcion": [
            {
              "1": "Intel E3-1265LV2"
            },
            {
              "2": "2.50 GHz Quad Core w/HT"
            },
            {
              "3": "8 GB RAM"
            },
            {
              "4": "1000 GB HDD en RAID 1"
            },
            {
              "4": "10 TB Ancho de Banda"
            },
            {
              "5": "2 Gratis IPs"
            }
          ]
        },
        {
          "tipoplan": "MS4",
          "valor": 544.32,
          "descripcion": [
            {
              "1": "Intel E3-1230LV2"
            },
            {
              "2": "3.20 GHz Quad Core w/HT"
            },
            {
              "3": "16 GB RAM"
            },
            {
              "4": "1000 GB HDD en RAID 1"
            },
            {
              "4": "15 TB Ancho de Banda"
            },
            {
              "5": "2 Gratis IPs"
            }
          ]
        }
      ],
      "preguntas": []
    },
    {
      "id": 7,
      "nombreproducto": "Alojamiento de revendedor Linux",
      "descripcion": "Empiece su negocio de hosting hoy. Incluye gratis WHM, cPanel y WHMCS",
      "tiposervicio": "Alojamiento",
      "subtiposervicio": "Alojamiento reseller",
      "planes": [
        {
          "tipoplan": "R0",
          "valor": 14.4,
          "descripcion": [
            {
              "1": "20 GB Espacio en Disco"
            },
            {
              "2": "200 GB Transferencia de Datos"
            },
            {
              "3": "20 Sitios Web"
            },
            {
              "4": "Reventa soportada"
            }
          ]
        },
        {
          "tipoplan": "R1",
          "valor": 34.2,
          "descripcion": [
            {
              "1": "40 GB Espacio en Disco"
            },
            {
              "2": "800 GB Transferencia de Datos"
            },
            {
              "3": "Ilimitado Sitios Web"
            }
          ]
        },
        {
          "tipoplan": "R2",
          "valor": 37.8,
          "descripcion": [
            {
              "1": "50 GB Espacio en Disco"
            },
            {
              "2": "1000 GB Transferencia de Datos"
            },
            {
              "3": "Ilimitado Sitios Web"
            },
            {
              "4": "WHMCS gratis"
            }
          ]
        },
        {
          "tipoplan": "R3",
          "valor": 50.4,
          "descripcion": [
            {
              "1": "100 GB Espacio en Disco"
            },
            {
              "2": "2000 GB Transferencia de Datos"
            },
            {
              "3": "Ilimitado Sitios Web"
            },
            {
              "4": "WHMCS gratis"
            }
          ]
        },
        {
          "tipoplan": "R4",
          "valor": 76.5,
          "descripcion": [
            {
              "1": "200 GB Espacio en Disco"
            },
            {
              "2": "4000 GB Transferencia de Datos"
            },
            {
              "3": "Ilimitado Sitios Web"
            },
            {
              "4": "1WHMCS gratis"
            }
          ]
        }
      ],
      "preguntas": [
        {
          "id": 1,
          "pregunta": "¿Qué es Alojamiento Web del Revendedor?",
          "respuesta": "El programa de Alojamiento del Revendedor le permite crear sub-paquetes con espacio en disco y transferencia. Usted puede utilizar WHM para crear paquetes personalizados (cada uno con cPanel) y suministrarlos a sus clientes. Además, puede utilizar WHMCS para la facturación (No es compatible con el plan de base)."
        },
        {
          "id": 2,
          "pregunta": "¿Qué tipo de Panes de Control obtengo con un paquete de Alojamiento de Revendedor ?",
          "respuesta": "Todos los paquetes de Alojamiento del Revendedor vienen con 2 paneles de control separados, WHM y cPanel. WHM le da el control administrativo de su paquete de Alojamiento del Revendedor y cPanel le permite a sus clientes administrar sus paquetes de alojamiento web individual."
        },
        {
          "id": 3,
          "pregunta": "¿Cómo puedo crear sub-paquetes y manejarlos?",
          "respuesta": "Su panel de control WHM le permite crear y administrar distintos paquetes de hosting."
        },
        {
          "id": 4,
          "pregunta": "¿Qué es WHMCS y como obtengo?",
          "respuesta": "WHMCS es una plataforma de facturación popular y utilizado por la mayoría de los anfitriones de Web. Nosotros proporcionamos una licencia de WHMCS libre para todos los planes, excepto el plan de arranque."
        },
        {
          "id": 5,
          "pregunta": "¿como pueden mis clientes administrar sus paquetes individuales?",
          "respuesta": "Sus clientes los pueden administrar a través de cPanel."
        },
        {
          "id": 6,
          "pregunta": "¿Cuáles son las ventajas de la reventa de Alojamiento Web?",
          "respuesta": "Si eres un Diseñador Web o Desarrollador puede alojar y administrar todos sus sitios web o clientes con un paquete de Alojamiento del Revendedor, en vez de manejar múltiples paquetes de alojamiento compartido. Esto también reduce los costes de alojamiento Web de manera significativa.\n\nAdemás, puede revender Alojamiento Web como una característica de valor añadido a su negocio existente o como una entidad separada."
        },
        {
          "id": 7,
          "pregunta": "¿Puedo Actualizar entre los planes?",
          "respuesta": "Sí, usted puede actualizar su plan actual a un plan superior en cualquier momento."
        },
        {
          "id": 8,
          "pregunta": "¿Hay una garantía de devolución de dinero?",
          "respuesta": "Sí, ofrecemos un libre de riesgo del 100% y 30 días de garantía de devolución de dinero"
        },
        {
          "id": 9,
          "pregunta": "¿Sus planes para revendedores de Alojamiento Web incluyen un instalador con un solo clic?",
          "respuesta": "Sí, todos los planes de Alojamiento del Revendedor vienen integrados con Softaculous - Popular y fácil de usar con un solo clic de instalación."
        },
        {
          "id": 10,
          "pregunta": "¿Cómo se maneja el soporte técnico?",
          "respuesta": "Tenemos un equipo de apoyo completo a la mano para ayudarle. Puedes echar un vistazo a todos nuestros datos de contacto aquí. Sin embargo, nosotros no ofrecemos soporte a sus clientes directamente."
        }
      ]
    },
    {
      "id": 8,
      "nombreproducto": "Alojamiento de revendedor Windows",
      "descripcion": "Empiece su negocio de hosting hoy. Incluye gratis Parallel Plesk, WHMCS, Soporte de confianza, Infraestructura robusta, Alojamiento de correo avanzado inluido, características de alojamiento y agregadoS",
      "tiposervicio": "Alojamiento",
      "subtiposervicio": "Alojamiento reseller",
      "planes": [
        {
          "tipoplan": "R1",
          "valor": 32.4,
          "descripcion": [
            {
              "1": "10 GB Espacio"
            },
            {
              "2": "200 GB Transferencia"
            }
          ]
        },
        {
          "tipoplan": "R2",
          "valor": 39.6,
          "descripcion": [
            {
              "1": "25 GB Espacio"
            },
            {
              "2": "500 GB Transferencia"
            },
            {
              "3": "WHMCS gratis"
            }
          ]
        },
        {
          "tipoplan": "R3",
          "valor": 50.4,
          "descripcion": [
            {
              "1": "50 GB Espacio"
            },
            {
              "2": "1000 GB Transferencia"
            },
            {
              "3": "WHMCS gratis"
            }
          ]
        },
        {
          "tipoplan": "R4",
          "valor": 81,
          "descripcion": [
            {
              "1": "100 GB Espacio"
            },
            {
              "2": "2000 GB Transferencia"
            },
            {
              "3": "WHMCS gratis"
            }
          ]
        }
      ],
      "preguntas": [
        {
          "id": 1,
          "pregunta": "¿Qué es Alojamiento Web del Revendedor?",
          "respuesta": "Alojamiento de Revendedor le permite crear sub-paquetes en el espacio en disco y ancho de banda asignado de su paquete de alojamiento principal. Usted puede utilizar su distribuidor Plesk Panel para crear paquetes personalizados individuales (cada uno con Plesk) y el suministro a sus clientes. Además, puede utilizar WHMCS para la facturación (No es compatible con el plan de base)."
        },
        {
          "id": 2,
          "pregunta": "¿Qué tipo de Panes de Control obtengo con un paquete de Alojamiento de Revendedor ?",
          "respuesta": "Todos los paquetes para revendedores de Alojamiento vienen con Parallels Plesk. Parallels Plesk Panel le da el control administrativo de su paquete de Hosting Reseller y permite a sus clientes a gestionar sus paquetes de alojamiento individual, a traves de su cliente Plesk Panel."
        },
        {
          "id": 3,
          "pregunta": "¿Cómo puedo crear sub-paquetes y manejarlos?",
          "respuesta": "Su distribuidor Plesk Control Panel te permite crear distintos paquetes de hosting y gestión completa de ellos."
        },
        {
          "id": 4,
          "pregunta": "¿Qué es WHMCS y no tengo WHMCS con sus Reseller Hosting?",
          "respuesta": "WHMCS es una plataforma de facturación popular y utilizado por la mayoría de los anfitriones de Web. Sí, sí proporcionan una licencia de WHMCS libre para todos los planes excepto el plan de base."
        },
        {
          "id": 5,
          "pregunta": "¿como pueden mis clientes administrar sus paquetes individuales?",
          "respuesta": "Sus clientes los pueden administrar a través de cPanel."
        },
        {
          "id": 6,
          "pregunta": "¿Cuáles son las ventajas de la reventa de Alojamiento?",
          "respuesta": "Si usted es un Diseñador web / Desarrollardor puede alojar y administrar todos sus sitios web o clientes con un paquete de Hosting Reseller en vez de ir por la molestia de la gestión de múltiples paquetes de alojamiento compartido. Esto también reduce los costes de alojamiento Web de manera significativa.\n\nAdemás, puede revender como una característica de valor añadido a su negocio existente o como una entidad separada."
        },
        {
          "id": 7,
          "pregunta": "¿Puedo Actualizar entre los planes?",
          "respuesta": "Sí, usted puede actualizar su plan actual a un plan superior en cualquier momento."
        },
        {
          "id": 8,
          "pregunta": "¿Hay una garantía de devolución de dinero?",
          "respuesta": "Sí, ofrecemos un libre de riesgo del 100% y 30 días de garantía de devolución de dinero"
        },
        {
          "id": 9,
          "pregunta": "¿Sus planes para revendedores de Alojamiento Web incluyen un instalador con un solo clic?",
          "respuesta": "Sí, todos los planes de Alojamiento del Revendedor vienen integrados con Softaculous - Popular y fácil de usar con un solo clic de instalación."
        },
        {
          "id": 10,
          "pregunta": "¿Cómo se maneja el soporte técnico?",
          "respuesta": "Tenemos un equipo de apoyo completo a la mano para ayudarle. Sin embargo, nosotros no ofrecemos soporte a sus clientes directamente."
        }
      ]
    },
    {
      "id": 9,
      "nombreproducto": "Sitio web de copia de respaldo de CodeGuard",
      "descripcion": "Su información es valiosa. Asegure su sitio web en apenas unos pocos minutos",
      "tiposervicio": "Alojamiento",
      "subtiposervicio": "Herramienta",
      "planes": [
        {
          "tipoplan": "Basic",
          "valor": 1.6,
          "descripcion": [
            {
              "1": "1 GB Espacio en Disco"
            },
            {
              "2": "hasta 5 sitios web"
            },
            {
              "3": "Iliminado número de bases de datos"
            },
            {
              "4": "cada 5 días se hace copia automática de seguridad"
            }
          ]
        },
        {
          "tipoplan": "Professional",
          "valor": 4.48,
          "descripcion": [
            {
              "1": "5 GB Espacio en Disco"
            },
            {
              "2": "hasta 10 sitios web"
            },
            {
              "3": "Iliminado número de bases de datos"
            },
            {
              "4": "cada día se hace copia automática de seguridad"
            }
          ]
        },
        {
          "tipoplan": "Premium",
          "valor": 8.35,
          "descripcion": [
            {
              "1": "10 GB Espacio en Disco"
            },
            {
              "2": "hasta 25 sitios web"
            },
            {
              "3": "Iliminado número de bases de datos"
            },
            {
              "4": "cada día se hace copia automática de seguridad"
            }
          ]
        },
        {
          "tipoplan": "Enterprise",
          "valor": 15.28,
          "descripcion": [
            {
              "1": "25 GB Espacio en Disco"
            },
            {
              "2": "hasta 100 sitios web"
            },
            {
              "3": "Iliminado número de bases de datos"
            },
            {
              "4": "cada día se hace copia automática de seguridad"
            }
          ]
        }
      ],
      "preguntas": []
    },
    {
      "id": 10,
      "nombreproducto": "Detector de Malware de SiteLock",
      "descripcion": "Más de 5000 sitios web son atacados diariamente. Obtenga SiteLock y protega su sitio web de hackers, virus y malware. Proteje su sitio web de Virus, ataques al motor de busqueda, hackers, robo de identidad, lista negras de motores de busqueda",
      "tiposervicio": "Alojamiento",
      "subtiposervicio": "Herramienta",
      "planes": [
        {
          "tipoplan": "Basic",
          "valor": 21.6,
          "descripcion": [
            {
              "1": "Para los sitios web estáticos"
            },
            {
              "2": "hasta 25 sitios web"
            },
            {
              "3": "Escaneo diario de Malware"
            },
            {
              "4": "Escaneo de red"
            },
            {
              "5": "Sello de confianza"
            },
            {
              "6": "Escaneo de aplicación/ 1 vez"
            },
            {
              "7": "Escaneo de Cross-Site Scripting/ 1 vez"
            },
            {
              "8": "Escudo cortafuegos"
            },
            {
              "9": "Monitoreo de lista negra"
            },
            {
              "10": "Verdadera velocidad CDN"
            }
          ]
        },
        {
          "tipoplan": "Professional",
          "valor": 61.32,
          "descripcion": [
            {
              "1": "Para sitios Web dinámicos"
            },
            {
              "2": "hasta 100 sitios web"
            },
            {
              "3": "Escaneo diario de Malware"
            },
            {
              "4": "Escaneo de red"
            },
            {
              "5": "Sello de confianza"
            },
            {
              "6": "Escaneo diario FTP"
            },
            {
              "7": "Eliminación automático de Malware"
            },
            {
              "8": "Seguimiento del cambio de archivos"
            },
            {
              "9": "Escaneo de Cross-Site Scripting/ 1 vez"
            },
            {
              "10": "Escaneo de entrada SQL/ 1 vez"
            },
            {
              "11": "Escaneo de aplicación/ 1 vez"
            },
            {
              "12": "Escudo cortafuegos"
            },
            {
              "13": "Monitoreo de lista negra"
            },
            {
              "14": "Verdadera velocidad CDN"
            }
          ]
        },
        {
          "tipoplan": "Premium",
          "valor": 81.84,
          "descripcion": [
            {
              "1": "Para los sitios web de comercio electrónico"
            },
            {
              "2": "hasta 500 sitios web"
            },
            {
              "3": "Escaneo diario de Malware"
            },
            {
              "4": "Escaneo de red"
            },
            {
              "5": "Sello de confianza"
            },
            {
              "6": "Escaneo diario FTP"
            },
            {
              "7": "Eliminación automático de Malware"
            },
            {
              "8": "Seguimiento del cambio de archivos"
            },
            {
              "9": "Escaneo de Cross-Site Scripting/ 1 vez"
            },
            {
              "10": "Escaneo de entrada SQL/ 1 vez"
            },
            {
              "11": "Escaneo de aplicación/ 1 vez"
            },
            {
              "12": "Escudo cortafuegos"
            },
            {
              "13": "Monitoreo de lista negra"
            },
            {
              "14": "Verdadera velocidad CDN"
            }
          ]
        },
        {
          "tipoplan": "Enterprise",
          "valor": 252,
          "descripcion": [
            {
              "1": "Para aplicaciones Web"
            },
            {
              "2": "hasta 2,500 sitios web"
            },
            {
              "3": "Escaneo diario de Malware"
            },
            {
              "4": "Escaneo de red"
            },
            {
              "5": "Sello de confianza"
            },
            {
              "6": "Escaneo diario FTP"
            },
            {
              "7": "Eliminación automático de Malware"
            },
            {
              "8": "Seguimiento del cambio de archivos"
            },
            {
              "9": "Escaneo de Cross-Site Scripting/ 1 vez"
            },
            {
              "10": "Escaneo de entrada SQL/ 1 vez"
            },
            {
              "11": "Escaneo de aplicación/ 1 vez"
            },
            {
              "12": "Escudo cortafuegos"
            },
            {
              "13": "Monitoreo de lista negra"
            },
            {
              "14": "Verdadera velocidad CDN"
            }
          ]
        }
      ],
      "preguntas": []
    }
  ];

  constructor(public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
  }

  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  clickOpenCard(parametro){
    if (!parametro) parametro = {};
    this.navCtrl.push('DetalleAlojamientosPage', {
      'item': parametro
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FetchAlojamientosPage');
  }

  cardclick(item){

  }

}
