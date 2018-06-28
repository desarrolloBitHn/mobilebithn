import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

/**
 * Generated class for the CorreoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {
    tipoCorreo;
    item;
    mes;
    total=0;
    cuentas = 0;
    valor = 0;
    meses= [{"id":1, "mes":1}, {"id":2, "mes":3}, {"id":3, "mes":6}, {"id":4, "mes":12}];
    formulario: FormGroup;

    basedatos =
    [
      {
        "id": 1,
        "nombre": "G Suite",
        "descripcion": "Correo electrónico, calendario y almacenamiento en cualquier dispositivo",
        "planes": [
          {
            "id": 1,
            "inicio": 1,
            "final": 500,
            "duracion": [
              {
                "id": 1,
                "meses": "12",
                "descuento": 5.75
              }
            ],
            "unidad": "mes",
            "valor": 6.24,
            "descripcion": []
          },
          {
            "id": 2,
            "inicio": 6,
            "final": 25,
            "duracion": [
              {
                "id": 1,
                "meses": "12",
                "descuento": 5.75
              }
            ],
            "unidad": "mes",
            "valor": 6.24,
            "descripcion": []
          },
          {
            "id": 3,
            "inicio": 26,
            "final": 49,
            "duracion": [
              {
                "id": 1,
                "meses": "12",
                "descuento": 5.75
              }
            ],
            "unidad": "mes",
            "valor": 6.24,
            "descripcion": []
          },
          {
            "id": 4,
            "inicio": 50,
            "final": 500,
            "duracion": [
              {
                "id": 1,
                "meses": "12",
                "descuento": 5.75
              }
            ],
            "unidad": "mes",
            "valor": 6.24,
            "descripcion": []
          }
        ],
        "preguntas": [
          {
            "id": 1,
            "pregunta": "¿Puedo usar mi dominio existente con G Suite?",
            "respuesta": "Sí, puede utilizar un dominio existente con su pedido de G Suite."
          },
          {
            "id": 2,
            "pregunta": "¿Qué sucede con mi correo, contactos y datos de calendario existentes cuando me cambie a G Suite?",
            "respuesta": "Al cambiar a G Suite desde otro programa o servicio web, usted y sus usuarios pueden llevar consigo sus datos de correo, contactos y calendario existentes. Tiene varias opciones para migrar datos en G Suite, dependiendo del tamaño de su organización y del sistema del que está migrando. Existen herramientas disponibles para la migración desde Microsoft Exchange, Lotus Notes, servidores IMAP y otras cuentas de Google."
          },
          {
            "id": 3,
            "pregunta": "¿Cuál es el espacio proporcionado por cuenta de correo electrónico?",
            "respuesta": "Cada cuenta de correo electrónico viene con 30 GB de espacio."
          },
          {
            "id": 4,
            "pregunta": "¿Es compatible G Suite con el cliente de correo electrónico que utilizo hoy?",
            "respuesta": "Además de acceder al correo de G Suite desde la interfaz web de Gmail, puede enviar y recibir correo desde su cliente de escritorio favorito. Dependiendo del cliente, puede utilizar el protocolo de correo IMAP o POP. Si está cambiando a G Suite desde Microsoft Exchange u otro servicio de Outlook, puede utilizar G Suite Sync. Este es un complemento para Outlook 2003, 2007, 2010 o 2013 que le permite utilizar Outlook para administrar el correo, el calendario y los contactos de G Suite, junto con sus notas, tareas y entradas de diario de Outlook."
          },
          {
            "id": 5,
            "pregunta": "¿Qué clientes de correo electrónico y protocolos son compatibles?",
            "respuesta": "Puede enviar y recibir mensajes de correo electrónico utilizando cualquier cliente de correo electrónico basado en escritorio, como Microsoft Outlook, Outlook Express, Mozilla Thunderbird, Eudora, Entourage 2004, Windows Mail, etc. También tenemos una guía sobre cómo configurar diferentes clientes de correo electrónico para enviar / Recibir correos electrónicos. El producto de correo electrónico corporativo admite los protocolos POP, IMAP y MAPI."
          },
          {
            "id": 6,
            "pregunta": "¿Desde qué teléfonos móviles puedo acceder a mi correo?",
            "respuesta": "Se puede acceder a su correo electrónico utilizando cualquier Smartphone o Tablet. La interfaz de Gmail es compatible en todos los principales sistemas operativos como iOS, Android, Windows Mobile, Symbian y Blackberry."
          },
          {
            "id": 7,
            "pregunta": "¿Puedo administrar varios dominios con G Suite?",
            "respuesta": "Si su organización adquiere un nuevo nombre de dominio o hace negocios en varios dominios, puede agregar todos sus dominios a su cuenta sin costo adicional. Los usuarios pueden tener identidades en uno o más de sus dominios mientras comparten servicios como parte de una organización. Administre sus dominios desde el mismo Panel de administración. Añada un dominio como dominio independiente o como alias de dominio, según cómo vaya a utilizarlo."
          },
          {
            "id": 8,
            "pregunta": "Si sólo quiero uno de los productos, ¿tengo que comprar toda la suite?",
            "respuesta": "Sí. G Suite está diseñado como una solución todo en uno con herramientas integradas que funcionan perfectamente juntas. Por ejemplo, puede recibir un mensaje en Gmail y convertirlo instantáneamente en un evento de Calendario. Cuando haga un comentario en Docs, Sheet o Slides, los colaboradores recibirán automáticamente alertas por correo electrónico. Con un solo clic, puede iniciar una reunión de video de Hangouts desde su bandeja de entrada o calendario. El uso de estas herramientas como un paquete completo mejora la productividad al mismo tiempo que le da a su negocio una mayor utilidad. Sin embargo, le invitamos a comprar la suite y utilizar sólo los servicios de su elección."
          },
          {
            "id": 9,
            "pregunta": "¿Puedo crear listas de correo?",
            "respuesta": "Sí, puede crear listas de correo y agregar / eliminar usuarios, seleccionar un moderador, restringir a las personas de unirse a una lista o incluso prohibir a los usuarios de una lista."
          },
          {
            "id": 10,
            "pregunta": "¿Cuál es su política de SPAM?",
            "respuesta": "Cuando se registra en una cuenta de G Suite, acepta no usar la cuenta para enviar spam, distribuir virus o abusar del servicio. Todos los usuarios de su dominio están sujetos a estos acuerdos, que forman parte de la Política de uso aceptable de G Suite. Si Google identifica a un usuario de G Suite que está violando estos acuerdos, nos reservamos el derecho de suspender inmediatamente al usuario. Si el problema es de ámbito general, nos reservamos el derecho de suspender toda la cuenta y denegar el acceso de administrador a todos los servicios de G Suite. En estos casos, enviamos una notificación a la dirección de correo electrónico secundaria registrada del administrador del dominio."
          },
          {
            "id": 11,
            "pregunta": "¿Puedo usar Auto Respuestas?",
            "respuesta": "Sí, usted puede hacerlo. Utilice el servicio de respuesta de vacaciones de Gmail para que la gente sepa que no podrá responder de inmediato. Mientras su contestador de vacaciones esté activado, Gmail enviará su respuesta a las personas que le envíen un correo electrónico."
          },
          {
            "id": 12,
            "pregunta": "¿Puedo transferir mi G Suite existente?",
            "respuesta": "Sí. Durante la transferencia, trasladamos todas las cuentas de correo electrónico del antiguo proveedor, manteniendo los datos intactos. Sin embargo, su tenencia actual con el otro proveedor, si tiene alguna, no se mueve a nosotros. Haga clic "
          }
        ],
        "caracteristicas": []
      },
      {
        "id": 2,
        "nombre": "Correo Electrónico de Negocios",
        "descripcion": "Webmail simple y poderoso.",
        "planes": [
          {
            "id": 1,
            "inicio": 1,
            "final": 5,
            "duracion": [],
            "unidad": "mes",
            "valor": 0.83,
            "descripcion": []
          },
          {
            "id": 2,
            "inicio": 6,
            "final": 25,
            "duracion": [],
            "unidad": "mes",
            "valor": 0.8,
            "descripcion": []
          },
          {
            "id": 3,
            "inicio": 26,
            "final": 49,
            "duracion": [],
            "unidad": "mes",
            "valor": 0.76,
            "descripcion": []
          },
          {
            "id": 4,
            "inicio": 50,
            "final": 500,
            "duracion": [],
            "unidad": "mes",
            "valor": 0.72,
            "descripcion": []
          }
        ],
        "preguntas": [
          {
            "id": 1,
            "pregunta": "¿En que me beneficia comprar el Email de Negocios?",
            "respuesta": "A diferencia de soluciones libres de correo electrónico , usted puede dar a su negocio una imagen más profesional con Business Email consiguiendo correo electrónico que se marca con el nombre de dominio de su empresa (ej. Sales@mybrand.com ) . Además , también se beneficiará de nuestra tecnología avanzada de correo electrónico que le da la menor latencia en la industria -y el mejor tiempo de actividad , escalabilidad y fiabilidad. Un servicio de correo electrónico que se sirve de la nube también significa que no hay IT , hardware , software , ancho de banda o costos de personal. Y la mejor parte es que usted puede agregar cuentas de correo electrónico a medida que su equipo crece."
          },
          {
            "id": 2,
            "pregunta": "¿Qué clientes y protocolos de correo electrónico son compatibles?",
            "respuesta": "Puede enviar y recibir mensajes de correo electrónico utilizando cualquier cliente de correo electrónico basado en escritorio como Microsoft Outlook, Outlook Express, Mozilla Thunderbird , Eudora , Entourage 2004 , Windows Mail , etc. También contamos con una guía sobre cómo puede configurar diferentes clientes de correo electrónico para enviar / recibir mensajes de correo electrónico . El producto de la empresa de correo electrónico es compatible con los protocolos POP , IMAP y MAPI ."
          },
          {
            "id": 3,
            "pregunta": "¿Cómo utilizo mi interfaz de Webmail ?",
            "respuesta": "Para acceder a su interfaz de correo web, puede utilizar la etiqueta blanca URL: http://webmail.yourdomainname.com. Una vez en la página de ingreso, lo que se necesita para iniciar sesión con su dirección de correo electrónico y la contraseña correspondiente."
          },
          {
            "id": 4,
            "pregunta": "¿Con qué teléfonos móviles puedo acceder a mi correo ?",
            "respuesta": "Su correo electrónico se puede acceder utilizando cualquier Smartphone o Tablet . Nuestra webmail , construida en HTML 5 y Javascript, es compatible en todos los principales sistemas operativos como iOS , Android , Windows Mobile , Symbian y Blackberry ."
          },
          {
            "id": 5,
            "pregunta": "¿Cuál es el espacio proporcionado por cuenta de correo electrónico ?",
            "respuesta": "Cada cuenta de correo electrónico viene con 5 GB de espacio dedicado a los correos electrónicos."
          },
          {
            "id": 6,
            "pregunta": "¿Qué puertos debo utilizar para usar correo electrónico Hosting ?",
            "respuesta": "Por lo general , el puerto utilizado para el Servidor de correo saliente / SMTP es 25. Sin embargo, puede ser una situación en la que su ISP esté bloqueando el uso del puerto 25 para el servicio SMTP . Para evitar esto, puede utilizar un puerto alternativo 587 para el envío de mails."
          },
          {
            "id": 7,
            "pregunta": "¿Puedo crear listas de correo ?",
            "respuesta": "Sí , puede crear listas de correo y añadir / eliminar usuarios , seleccione un moderador, restringir las personas a que se unan a una lista o incluso prohibir a los usuarios de una lista. Más información sobre esto se puede encontrar en nuestra base de conocimientos ."
          },
          {
            "id": 8,
            "pregunta": "¿Cuál es su política de Spam?",
            "respuesta": "Tomamos una postura de cero tolerancia contra el envío de correo no solicitado, correo electrónico en exceso, y spam. Listas seguras , comprar listas, y la venta de listas serán tratados como spam. Cualquier usuario que envíe spam tendrá su cuenta terminada con o sin previo aviso."
          },
          {
            "id": 9,
            "pregunta": "¿Puedo utilizar respuestas automáticas?",
            "respuesta": "Sí, si puedes. Una auto-respuesta es un programa que ,usa la configuración de su dirección de correo electrónico, y envía una respuesta, automática preestablecida a un correo electrónico, tan pronto como se reciba en esta dirección de correo electrónico. Usted puede encontrar más información sobre la configuración de una auto-respuesta de nuestra base de conocimientos."
          }
        ],
        "caracteristicas": [
          {
            "id": 1,
            "caracteristica": "Diseño intuitivo y sensible",
            "descripcion": "Bellamente diseñado y entregado con el poder de OpenXchange. También puede acceder a su correo electrónico en su teléfono inteligente o tableta."
          },
          {
            "id": 2,
            "caracteristica": "Protección antivirus incorporado",
            "descripcion": "Nuestra tecnología antivirus avanzada asegurado su bandeja de entrada y se asegura de que usted está protegido de la descarga de malware y virus."
          },
          {
            "id": 3,
            "caracteristica": "5GB de almacenamiento de copia de seguridad Plus",
            "descripcion": "Además de almacenamiento de correo 5GB, sus correos electrónicos están respaldados en nuestra infraestructura de tecnología de última generación para que nunca pierda correos importantes."
          },
          {
            "id": 4,
            "caracteristica": "100% de tiempo de actividad y Seguridad",
            "descripcion": "\n100% de tiempo de actividad y Seguridad\nNuestra gama alta de almacenamiento de correo NetApp garantiza cero pérdida de datos y redundancia, junto con 100% de disponibilidad de red."
          },
          {
            "id": 5,
            "caracteristica": "Calendarios, Contactos y Tareas",
            "descripcion": "Gestión de contactos, crear listas de tareas pendientes y realizar un seguimiento de todas sus reuniones en un lugar con las herramientas de productividad de OpenXchange."
          },
          {
            "id": 6,
            "caracteristica": "Medios de Comunicación Social en la bandeja de entrada",
            "descripcion": "Ahora ver su Twitter, Google+ se alimenta en su propia bandeja de entrada. OpenXchange trae todas tus redes sociales en un mismo lugar."
          }
        ]
      },
      {
        "id": 3,
        "nombre": "Correo Electrónico Empresarial",
        "descripcion": "Correo electrónico Avanzado y Clase-Corporativa.",
        "planes": [
          {
            "id": 1,
            "inicio": 1,
            "final": 5,
            "duracion": [],
            "unidad": "mes",
            "valor": 4.11,
            "descripcion": []
          },
          {
            "id": 2,
            "inicio": 6,
            "final": 25,
            "duracion": [],
            "unidad": "mes",
            "valor": 3.93,
            "descripcion": []
          },
          {
            "id": 3,
            "inicio": 26,
            "final": 49,
            "duracion": [],
            "unidad": "mes",
            "valor": 3.75,
            "descripcion": []
          },
          {
            "id": 4,
            "inicio": 50,
            "final": 500,
            "duracion": [],
            "unidad": "mes",
            "valor": 3.6,
            "descripcion": []
          }
        ],
        "preguntas": [
          {
            "id": 1,
            "pregunta": "¿Cómo me beneficio comprando un plan de correo electrónico empresarial?",
            "respuesta": "Comprando nuestro paquete de correo electrónico empresarial usted tomará provecho de nuestra tecnología de correo avanzada, para darle la menor latencia y el mejor tiempo de actividad en la industria, la escalabilidad y fiabilidad. Un servicio de correo electrónico que tiene como servidor una nube también significa que no existe hardware, software, ancho de banda o costo de personal, y un simple modelo de pago al mismo tiempo que su negocio crece."
          },
          {
            "id": 2,
            "pregunta": "¿Que características típicas provee un correo electrónico empresarial que no posee el correo personal?",
            "respuesta": "El correo electrónico empresial soporta un número de características que no están disponibles en un correo personal. Calendarios compartidos, contactos globales, administración de documentos compartidos, administración de tareas compartidas, sincronización para dispositivos móbiles, MS Outlook y Mac OSX."
          },
          {
            "id": 3,
            "pregunta": "¿Qué Correo de Clientes y Protocolos son soportados?",
            "respuesta": "Puede enviar y recibir mensajes de correo electrónico utilizando cualquier cuenta de correo electrónico, como Microsoft Outlook, Outlook Express, Mozilla Thunderbird, Eudora, Entourage 2004, Windows Mail, etc También tenemos una guía de cómo se puede configurar diferentes cuentas de correo electrónico para enviar / recibir mensajes de correo electrónico. El producto de la empresa de correo electrónico admite los protocolos POP, IMAP y MAPI."
          },
          {
            "id": 4,
            "pregunta": "¿Cómo puedo usar mi interfaz Webmail?",
            "respuesta": "Para acceder a su interfaz de correo web, puede escribir la siguiente dirección URL: http://webmail.yourdomainname.com. Una vez en la página de inicio de sesión, usted debe ingresar con su dirección de correo electrónico y la contraseña correspondiente."
          },
          {
            "id": 5,
            "pregunta": "¿Desde qué teléfonos móviles puedo acceder a mi correo?",
            "respuesta": "Su correo electrónico se puede acceder usando cualquier Smartphone o Tablet. Nuestro webmail es compatible con todos los principales sistemas operativos como iOS, Android, Windows Mobile, Symbian y Blackberry."
          },
          {
            "id": 6,
            "pregunta": "¿Cuál es el espacio que se proporciona por cuenta de correo electrónico?",
            "respuesta": "Cada cuenta de correo electrónico viene con espacio de 25 GB dedicado al espacio de correo electrónico y 5 GB de espacio dedicado al almacenamiento de archivos. Por lo tanto, cada cuenta de correo electrónico podrá disponer de 30 GB de almacenamiento."
          },
          {
            "id": 7,
            "pregunta": "¿Que puertos necesito usar para Alojamiento de Correo Electrónico?",
            "respuesta": "Por lo general, el puerto utilizado por el servicio de servidor de correo / SMTP saliente es de 25. Sin embargo, podría haber una situación en la que su ISP esté bloqueando el uso del puerto 25 para el servicio SMTP. Para evitar esto usted puede utilizar un puerto alternativo 587 para el envío de mails."
          },
          {
            "id": 8,
            "pregunta": "¿Puedo crear listas de correo?",
            "respuesta": "Sí, puede crear listas de correo y agregar / eliminar usuarios, seleccionar un moderador, restringir a personas a que se incorporen a una lista o incluso bloquear a los usuarios de una lista. Más información sobre esto se puede encontrar en nuestra base de conocimientos"
          },
          {
            "id": 9,
            "pregunta": "¿Cuál es su política de SPAM?",
            "respuesta": "Tomamos una postura de tolerancia cero contra el envío de correo electrónico no solicitado, correo electrónico a granel, y el spam. Las listas seguras, listas de compras, y la venta de las listas será tratado como spam. Cualquier usuario que envíe un correo Spam tendrá su cuenta terminada con o sin previo aviso."
          },
          {
            "id": 10,
            "pregunta": "¿Puedo utilizar respuestas autompaticas?",
            "respuesta": "Sí, se puede. Una respuesta automática es un programa que, cuando su correo electrónico está configurado, envía una respuesta automática predeterminada a un correo electrónico, tan pronto como se reciba el correo. Para configurar una respuesta automática, consulte el siguiente artículo de nuetra base de conocimiento."
          }
        ],
        "caracteristicas": [
          {
            "id": 1,
            "caracteristica": "Bandeja de entrada unificada",
            "descripcion": "Sincroniza tus fuentes sociales, tareas y múltiples cuentas de correo electrónico para que toda la comunicación digital esté bajo un mismo techo."
          },
          {
            "id": 2,
            "caracteristica": "¡Más que suficiente!",
            "descripcion": "Con 25 GB de almacenamiento de correo electrónico y un 5 GB adicional para los archivos, nunca se quedará sin espacio. Impulsado por Open Xchange, está todo en marcha respaldado por nuestra infraestructura tecnológica de última generación."
          },
          {
            "id": 3,
            "caracteristica": "Movilidad",
            "descripcion": "Configure Symbian, iOS, Android o Windows en su teléfono o tableta para acceder al buzón de colaboración de negocios mientras se desplaza de un lugar a otro."
          },
          {
            "id": 4,
            "caracteristica": "Colaboración",
            "descripcion": "Intercambio rápido de calendarios, contactos, archivos y tareas sólo significa una cosa: tendrá mas tareas realizadas. ¡Más fácil, mejor y más rápido!"
          },
          {
            "id": 5,
            "caracteristica": "Diseño estético",
            "descripcion": "Facilite sus correos electrónicos, tareas, calendarios y fuentes sociales con nuestra interface intuitiva, diseñada para una máxima eficiencia."
          }
        ]
      }
    ];
  constructor(public modalCtrl: ModalController ,public nav: Nav, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.formulario = this.crearMiForm();
    this.item = this.basedatos[0];
    this.tipoCorreo = 1;
  }

  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  // guardar(){
  //   console.log(this.formulario.value);
  // }

  preguntas(_item){
    const modal = this.modalCtrl.create('ModalPreguntasPage', { item: _item });
    modal.present();
  }

  onChangeInput(valor){
    if(this.item.id != 1) {
      this.rangoValor();
    }

    var iteracion: number = this.mes - 1;

    if (this.mes != null){
      if (this.item.id == 1){
        if (this.mes == 12){
          this.valor = 5.72
        }else {
          this.valor = 6.24;
        }
        this.total = (this.cuentas * this.valor )*this.mes;
      } else {
        this.rangoValor();
      }
      this.total = (this.cuentas * this.valor )*this.mes;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorreoPage');
  }

  onSegmentChange(valor){
    this.total = 0;
    this.valor = 0;
    this.cuentas = 0;
    for(var i=0; i < this.basedatos.length; i++){
      if(this.basedatos[i].id == valor) {
        this.item = this.basedatos[i];
      }

    }
  }

  rangoValor(){
    if(this.cuentas < 6) {
      this.valor = this.item.planes[0].valor;
    } else if (this.cuentas < 26) {
      this.valor = this.item.planes[1].valor;
    } else if (this.cuentas < 50){
      this.valor = this.item.planes[2].valor;
    } else if (this.cuentas >= 50) {
      this.valor = this.item.planes[3].valor;
    }
  }

  onChangeOpction1(mes){
    var _mes = this.intMes(mes);
    this.mes = _mes;
    if (_mes == 12){
      this.total = (this.cuentas * 5.75 )*_mes;
    }else {
      this.total = (this.cuentas * 6.24)*_mes;
    }
  }

  onChangeOpction(mes){
    var _mes = this.intMes(mes);
    this.mes = _mes;
    this.total = (this.cuentas * this.valor)*_mes;
  }

  intMes(mes){
    for(var i = 0; i < this.meses.length; i++){
      if (this.meses[i].id == mes){
        return this.meses[i].mes;
        break;
      }
    }
  }

  private crearMiForm(){
    return this.formBuilder.group({
      cuentas: new FormControl(0, Validators.max(500) ),
      duracion: new FormControl(),
      total: new FormControl()
    });
  }

}
