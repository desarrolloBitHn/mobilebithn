import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
declare var jquery: any;
declare var $: any;
/**
 * Generated class for the SeguridadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seguridad',
  templateUrl: 'seguridad.html',
})
export class SeguridadPage {
  seguridad = {};
  tipoSeguridad;
  basedatos =
  [
      {
        "id": 1,
        "nombre": "Seguridad",
        "nombreherramienta": "Certificados SSL",
        "descripcion": "Cifrado potente para su información.",
        "planes": [
                    {
                      "id": 1,
                      "nombre": "Positive SSL",
                      "descripcion": [
                                      {
                                        "id": 1,
                                        "descripcion": "Validación de Dominio"
                                      },
                                      {
                                        "id": 2,
                                        "descripcion": "1 Dominio"
                                      },
                                      {
                                        "id": 3,
                                        "descripcion": "Licencias de servidor adicionales gratuitos"
                                      },
                                      {
                                        "id": 4,
                                        "descripcion": "Expedido dentro de 2 días"
                                      },
                                      {
                                        "id": 5,
                                        "descripcion": "$10,000 de garantía de usuario"
                                      }
                                    ],
                      "valor": "47.76",
                      "unidad": "año"
                    },
                    {
                      "id": 2,
                      "nombre": "Comodo SSL",
                      "descripcion": [
                        {
                          "id": 1,
                          "descripcion": "Validación de Dominio"
                        },
                        {
                          "id": 2,
                          "descripcion": "1 Dominio"
                        },
                        {
                          "id": 3,
                          "descripcion": "Licencias de servidor adicionales gratuitos"
                        },
                        {
                          "id": 4,
                          "descripcion": "Expedido dentro de 2 días"
                        },
                        {
                          "id": 5,
                          "descripcion": "$250,000 de garantía de usuario"
                        }
                      ],
                      "valor": "95.88",
                      "unidad": "año"
                    },
                    {
                      "id": 3,
                      "nombre": "Positive SSL Wildcard",
                      "descripcion": [
                        {
                          "id": 1,
                          "descripcion": "Validación de Dominio"
                        },
                        {
                          "id": 2,
                          "descripcion": "Subdominios ilimitados"
                        },
                        {
                          "id": 3,
                          "descripcion": "Licencias de servidor adicionales gratuitos"
                        },
                        {
                          "id": 4,
                          "descripcion": "Expedido dentro de 2 días"
                        },
                        {
                          "id": 5,
                          "descripcion": "$10,000 de garantía de usuario"
                        }
                      ],
                      "valor": "395.16",
                      "unidad": "año"
                    },
                    {
                      "id": 4,
                      "nombre": "EV SSL",
                      "descripcion": [
                        {
                          "id": 1,
                          "descripcion": "Extended-validation"
                        },
                        {
                          "id": 2,
                          "descripcion": "Subdominios ilimitados"
                        },
                        {
                          "id": 3,
                          "descripcion": "Licencias de servidor adicionales gratuitos"
                        },
                        {
                          "id": 4,
                          "descripcion": "Trusted Green address bar"
                        },
                        {
                          "id": 5,
                          "descripcion": "$1,750,000 de garantía de usuario"
                        }
                      ],
                      "valor": "407.76",
                      "unidad": "año"
                    }
                  ],
        "preguntas": [
                      {
                        "id": 1,
                        "pregunta": "¿Qué es un certificado SSL?",
                        "respuesta": "Un certificado SSL es un certificado digital emitido para un dominio por una autoridad central llamada la autoridad de certificación. para emitir un certificado SSL, debe adquirir uno y luego pasar por un proceso de verificación llevado a cabo por la autoridad de certificación."
                      },
                      {
                        "id": 2,
                        "pregunta": "¿Por qué debo comprar un certificado SSL?",
                        "respuesta": "Un certificado SSL hace 2 cosas: a. Cifrar la información enviada desde el navegador de su usuario's de su sitio web b. Autenticar la identidad de su sitio web's. Al hacer estas 2 cosas, un certificado SSL protege a sus clientes y a su vez aumenta su confianza en su negocio en línea. Esto es especialmente importante si su sitio web requiere que los usuarios inicien sesión utilizando contraseñas o introduciendo información confidencial, como datos de la tarjeta de crédito."
                      },
                      {
                        "id": 3,
                        "pregunta": "¿Los certificados SSL funciona en todos los navegadores?",
                        "respuesta": "Los certificados SSL son compatibles con todos los principales navegadores."
                      },
                      {
                        "id": 4,
                        "pregunta": "¿Puedo actualizar mis certificados SSL?",
                        "respuesta": "Por desgracia, no apoyamos actualizaciones /degradaciones en el momento. Si es necesario, puede comprar un nuevo certificado e instalarlo en el mismo servidor web como el antiguo certificado."
                      },
                      {
                        "id": 5,
                        "pregunta": "¿Necesito conocimientos técnicos para crear un certificado SSL en mi sitio web?",
                        "respuesta": "Si bien no es difícil de instalar un certificado SSL, si implica siguiendo una serie de pasos. Puede encontrar más información en nuestra base de conocimientos."
                      }
                    ],
        "caracteristicas": [
                            {
                              "id": 1,
                              "caracteristica": "Seguridad sólida como una roca",
                              "descripcion": "Los certificados SSL de Comodo proporcionan hasta el cifrado de 128 o 256 bits para mayor seguridad de los datos de los visitantes de su sitio web"
                            },
                            {
                              "id": 2,
                              "caracteristica": "Refuerzo en la confianza de sus clientes",
                              "descripcion": "Muchos clientes buscan activamente el icono de candado SSL antes de entregar los datos sensibles. Obtener un certificado SSL para aumentar la confianza de sus clientes en su negocio en línea."
                            },
                            {
                              "id": 3,
                              "caracteristica": "Un mejor posicionamiento en SEO",
                              "descripcion": "Google da un mayor ranking a los sitios web asegurados con certificados SSL. Lo que significa que los certificados SSL son críticos si usted es serio acerca de su negocio en línea."
                            },
                            {
                              "id": 4,
                              "caracteristica": "Sello de seguridad de comodo",
                              "descripcion": "Su certificado viene con un sello seguro Comodo que sirve como un recordatorio constante a los clientes de que su sitio está protegido"
                            },
                            {
                              "id": 5,
                              "caracteristica": "30 días de garantía de devolución de dinero",
                              "descripcion": "Todos nuestros certificados SSL vienen con 30-días de garantía de devolución de dinero. Sin hacer preguntas."
                            }
                          ]
      },
      {
        "id": 2,
        "nombre": "Seguridad",
        "nombreherramienta": "SiteLock",
        "descripcion": "Más de 5000 sitios web son atacados diariamente. Obtenga SiteLock y protega su sitio web de hackers, virus y malware.",
        "planes": [
                    {
                      "id": 1,
                      "nombre": "Basic",
                      "descripcion": [
                                      {
                                        "id": 1,
                                        "descripcion": "25 Páginas"
                                      },
                                      {
                                        "id": 2,
                                        "descripcion": "Cuenta con escaneo diario de Malware"
                                      },
                                      {
                                        "id": 3,
                                        "descripcion": "Cuenta con escaneo de red"
                                      },
                                      {
                                        "id": 4,
                                        "descripcion": "Cuenta con sello de confianza"
                                      },
                                      {
                                        "id": 5,
                                        "descripcion": "Cuenta con escaneo diario FTP"
                                      },
                                      {
                                        "id": 6,
                                        "descripcion": "Cuenta con eliminación de Malware automático"
                                      },
                                      {
                                        "id": 7,
                                        "descripcion": "Cuenta con seguimiento del cambio de archivos"
                                      },
                                      {
                                        "id": 8,
                                        "descripcion": "Cuenta con 1 escaneo de aplicación"
                                      },
                                      {
                                        "id": 9,
                                        "descripcion": "Cuenta con 1 escaneo de entrada SQL"
                                      },
                                      {
                                        "id": 10,
                                        "descripcion": "Cuenta con 1 escaneo de Cross-Site Scripting"
                                      },
                                      {
                                        "id": 11,
                                        "descripcion": "Cuenta con alertas de seguridad"
                                      },
                                      {
                                        "id": 12,
                                        "descripcion": "Cuenta con el uso de la Red global para identificar comportamiento malicioso"
                                      },
                                      {
                                        "id": 13,
                                        "descripcion": "Cuenta con bloqueo de ataques perjudiciales al motor de busqueda"
                                      },
                                      {
                                        "id": 14,
                                        "descripcion": "Cuenta con el acceso al motor de búsqueda"
                                      },
                                      {
                                        "id": 15,
                                        "descripcion": "Cuenta con la eliminación de comentarios Spam"
                                      },
                                      {
                                        "id": 16,
                                        "descripcion": "Cuenta con seguridad CAPTCHA"
                                      },
                                      {
                                        "id": 17,
                                        "descripcion": "Bloquear contenido scraping"
                                      },
                                      {
                                        "id": 18,
                                        "descripcion": "Cuenta con el seguimiento del motor de búsqueda de lista negra"
                                      },
                                      {
                                        "id": 19,
                                        "descripcion": "Cuenta con la verificación de correo no deseado"
                                      },
                                      {
                                        "id": 20,
                                        "descripcion": "Cuenta con la verificación de SSL"
                                      },
                                      {
                                        "id": 21,
                                        "descripcion": "Cuenta con la verificación de Negocio"
                                      },
                                      {
                                        "id": 22,
                                        "descripcion": "Cuenta con la verificación de número de teléfono"
                                      },
                                      {
                                        "id": 23,
                                        "descripcion": "Cuenta con la verificación del código postal"
                                      },
                                      {
                                        "id": 24,
                                        "descripcion": "Cuenta con escudo cortafuegos"
                                      },
                                      {
                                        "id": 25,
                                        "descripcion": "Cuenta con monitoreo de lista negra"
                                      },
                                      {
                                        "id": 26,
                                        "descripcion": "Cuenta con la verdadera velocidad CDN"
                                      }
                                    ],
                      "valor": "21.60",
                      "unidad": "año"
                    },
                    {
                      "id": 2,
                      "nombre": "Professional",
                      "descripcion": [
                                      {
                                        "id": 1,
                                        "descripcion": "100 Páginas"
                                      },
                                      {
                                        "id": 2,
                                        "descripcion": "Cuenta con escaneo diario de Malware"
                                      },
                                      {
                                        "id": 3,
                                        "descripcion": "Cuenta con escaneo de red"
                                      },
                                      {
                                        "id": 4,
                                        "descripcion": "Cuenta con sello de confianza"
                                      },
                                      {
                                        "id": 5,
                                        "descripcion": "Cuenta con escaneo diario FTP"
                                      },
                                      {
                                        "id": 6,
                                        "descripcion": "Cuenta con eliminación de Malware automático"
                                      },
                                      {
                                        "id": 7,
                                        "descripcion": "Cuenta con seguimiento del cambio de archivos"
                                      },
                                      {
                                        "id": 8,
                                        "descripcion": "Cuenta con 1 escaneo de aplicación"
                                      },
                                      {
                                        "id": 9,
                                        "descripcion": "Cuenta con 1 escaneo de entrada SQL"
                                      },
                                      {
                                        "id": 10,
                                        "descripcion": "Cuenta con 1 escaneo de Cross-Site Scripting"
                                      },
                                      {
                                        "id": 11,
                                        "descripcion": "Cuenta con alertas de seguridad"
                                      },
                                      {
                                        "id": 12,
                                        "descripcion": "Cuenta con el uso de la Red global para identificar comportamiento malicioso"
                                      },
                                      {
                                        "id": 13,
                                        "descripcion": "Cuenta con bloqueo de ataques perjudiciales al motor de busqueda"
                                      },
                                      {
                                        "id": 14,
                                        "descripcion": "Cuenta con el acceso al motor de búsqueda"
                                      },
                                      {
                                        "id": 15,
                                        "descripcion": "Cuenta con la eliminación de comentarios Spam"
                                      },
                                      {
                                        "id": 16,
                                        "descripcion": "Cuenta con seguridad CAPTCHA"
                                      },
                                      {
                                        "id": 17,
                                        "descripcion": "Bloquear contenido scraping"
                                      },
                                      {
                                        "id": 18,
                                        "descripcion": "Cuenta con el seguimiento del motor de búsqueda de lista negra"
                                      },
                                      {
                                        "id": 19,
                                        "descripcion": "Cuenta con la verificación de correo no deseado"
                                      },
                                      {
                                        "id": 20,
                                        "descripcion": "Cuenta con la verificación de SSL"
                                      },
                                      {
                                        "id": 21,
                                        "descripcion": "Cuenta con la verificación de Negocio"
                                      },
                                      {
                                        "id": 22,
                                        "descripcion": "Cuenta con la verificación de número de teléfono"
                                      },
                                      {
                                        "id": 23,
                                        "descripcion": "Cuenta con la verificación del código postal"
                                      },
                                      {
                                        "id": 24,
                                        "descripcion": "Cuenta con escudo cortafuegos"
                                      },
                                      {
                                        "id": 25,
                                        "descripcion": "Cuenta con monitoreo de lista negra"
                                      },
                                      {
                                        "id": 26,
                                        "descripcion": "Cuenta con la verdadera velocidad CDN"
                                      }
                                    ],
                      "valor": "61.32",
                      "unidad": "año"
                    },
                    {
                      "id": 3,
                      "nombre": "Premium",
                      "descripcion": [
                                      {
                                        "id": 1,
                                        "descripcion": "500 Páginas"
                                      },
                                      {
                                        "id": 2,
                                        "descripcion": "Cuenta con escaneo diario de Malware"
                                      },
                                      {
                                        "id": 3,
                                        "descripcion": "Cuenta con escaneo de red"
                                      },
                                      {
                                        "id": 4,
                                        "descripcion": "Cuenta con sello de confianza"
                                      },
                                      {
                                        "id": 5,
                                        "descripcion": "Cuenta con escaneo diario FTP"
                                      },
                                      {
                                        "id": 6,
                                        "descripcion": "Cuenta con eliminación de Malware automático"
                                      },
                                      {
                                        "id": 7,
                                        "descripcion": "Cuenta con seguimiento del cambio de archivos"
                                      },
                                      {
                                        "id": 8,
                                        "descripcion": "Cuenta con escaneo de aplicación"
                                      },
                                      {
                                        "id": 9,
                                        "descripcion": "Cuenta con escaneo de entrada SQL"
                                      },
                                      {
                                        "id": 10,
                                        "descripcion": "Cuenta con escaneo de Cross-Site Scripting"
                                      },
                                      {
                                        "id": 11,
                                        "descripcion": "Cuenta con alertas de seguridad"
                                      },
                                      {
                                        "id": 12,
                                        "descripcion": "Cuenta con el uso de la Red global para identificar comportamiento malicioso"
                                      },
                                      {
                                        "id": 13,
                                        "descripcion": "Cuenta con bloqueo de ataques perjudiciales al motor de busqueda"
                                      },
                                      {
                                        "id": 14,
                                        "descripcion": "Cuenta con el acceso al motor de búsqueda"
                                      },
                                      {
                                        "id": 15,
                                        "descripcion": "Cuenta con la eliminación de comentarios Spam"
                                      },
                                      {
                                        "id": 16,
                                        "descripcion": "Cuenta con seguridad CAPTCHA"
                                      },
                                      {
                                        "id": 17,
                                        "descripcion": "Bloquear contenido scraping"
                                      },
                                      {
                                        "id": 18,
                                        "descripcion": "Cuenta con el seguimiento del motor de búsqueda de lista negra"
                                      },
                                      {
                                        "id": 19,
                                        "descripcion": "Cuenta con la verificación de correo no deseado"
                                      },
                                      {
                                        "id": 20,
                                        "descripcion": "Cuenta con la verificación de SSL"
                                      },
                                      {
                                        "id": 21,
                                        "descripcion": "Cuenta con la verificación de Negocio"
                                      },
                                      {
                                        "id": 22,
                                        "descripcion": "Cuenta con la verificación de número de teléfono"
                                      },
                                      {
                                        "id": 23,
                                        "descripcion": "Cuenta con la verificación del código postal"
                                      },
                                      {
                                        "id": 24,
                                        "descripcion": "Cuenta con escudo cortafuegos"
                                      },
                                      {
                                        "id": 25,
                                        "descripcion": "Cuenta con monitoreo de lista negra"
                                      },
                                      {
                                        "id": 26,
                                        "descripcion": "Cuenta con la verdadera velocidad CDN"
                                      }
                                    ],
                      "valor": "81.84",
                      "unidad": "año"
                    },
                    {
                      "id": 4,
                      "nombre": "Enterprise",
                      "descripcion": [
                                      {
                                        "id": 1,
                                        "descripcion": "2,500 Páginas"
                                      },
                                      {
                                        "id": 2,
                                        "descripcion": "Cuenta con escaneo diario de Malware"
                                      },
                                      {
                                        "id": 3,
                                        "descripcion": "Cuenta con escaneo de red"
                                      },
                                      {
                                        "id": 4,
                                        "descripcion": "Cuenta con sello de confianza"
                                      },
                                      {
                                        "id": 5,
                                        "descripcion": "Cuenta con escaneo diario FTP"
                                      },
                                      {
                                        "id": 6,
                                        "descripcion": "Cuenta con eliminación de Malware automático"
                                      },
                                      {
                                        "id": 7,
                                        "descripcion": "Cuenta con seguimiento del cambio de archivos"
                                      },
                                      {
                                        "id": 8,
                                        "descripcion": "Cuenta con escaneo de aplicación"
                                      },
                                      {
                                        "id": 9,
                                        "descripcion": "Cuenta con escaneo de entrada SQL"
                                      },
                                      {
                                        "id": 10,
                                        "descripcion": "Cuenta con escaneo de Cross-Site Scripting"
                                      },
                                      {
                                        "id": 11,
                                        "descripcion": "Cuenta con alertas de seguridad"
                                      },
                                      {
                                        "id": 12,
                                        "descripcion": "Cuenta con el uso de la Red global para identificar comportamiento malicioso"
                                      },
                                      {
                                        "id": 13,
                                        "descripcion": "Cuenta con bloqueo de ataques perjudiciales al motor de busqueda"
                                      },
                                      {
                                        "id": 14,
                                        "descripcion": "Cuenta con el acceso al motor de búsqueda"
                                      },
                                      {
                                        "id": 15,
                                        "descripcion": "Cuenta con la eliminación de comentarios Spam"
                                      },
                                      {
                                        "id": 16,
                                        "descripcion": "Cuenta con seguridad CAPTCHA"
                                      },
                                      {
                                        "id": 17,
                                        "descripcion": "Bloquear contenido scraping"
                                      },
                                      {
                                        "id": 18,
                                        "descripcion": "Cuenta con el seguimiento del motor de búsqueda de lista negra"
                                      },
                                      {
                                        "id": 19,
                                        "descripcion": "Cuenta con la verificación de correo no deseado"
                                      },
                                      {
                                        "id": 20,
                                        "descripcion": "Cuenta con la verificación de SSL"
                                      },
                                      {
                                        "id": 21,
                                        "descripcion": "Cuenta con la verificación de Negocio"
                                      },
                                      {
                                        "id": 22,
                                        "descripcion": "Cuenta con la verificación de número de teléfono"
                                      },
                                      {
                                        "id": 23,
                                        "descripcion": "Cuenta con la verificación del código postal"
                                      },
                                      {
                                        "id": 24,
                                        "descripcion": "Cuenta con escudo cortafuegos"
                                      },
                                      {
                                        "id": 25,
                                        "descripcion": "Cuenta con monitoreo de lista negra"
                                      },
                                      {
                                        "id": 26,
                                        "descripcion": "Cuenta con la verdadera velocidad CDN"
                                      }
                                    ],
                      "valor": "252.00",
                      "unidad": "año"
                    }
                  ],
        "preguntas": [],
        "caracteristicas": [
                            {
                              "id": 1,
                              "caracteristica": "Evita automáticamente los ataques",
                              "descripcion": "SiteLock monitorea su sitio web 24x7 en busca de vulnerabilidades y ataques, lo que significa que puede preocuparse menos por su sitio web y más acerca de su negocio."
                            },
                            {
                              "id": 2,
                              "caracteristica": "Aumenta la Confianza de los Clientes",
                              "descripcion": "Más de 70% Los clientes buscan una señal de seguridad antes de proporcionar información personal en línea. El Sello de Confianza SiteLock no sólo re-garantiza a los clientes sino que también aumenta las ventas."
                            },
                            {
                              "id": 3,
                              "caracteristica": "Comienza a trabajar inmediatamente",
                              "descripcion": "Usted no necesita conocimientos técnicos para instalar y configurar SiteLock para su sitio web. SiteLock es basado en la nube y comienza el escaneo de su sitio web y de correo electrónico al instante."
                            }
                          ]
      },
      {
        "id": 3,
        "nombre": "Seguridad",
        "nombreherramienta": "Sitio web de Copia de Respaldo de Codeguard",
        "descripcion": "Su información es valiosa. Asegure su sitio web en apenas unos pocos minutos",
        "planes": [
                    {
                      "id": 1,
                      "nombre": "Basic",
                      "descripcion": [
                                      {
                                        "id": 1,
                                        "descripcion": "Cuenta con 1 GB de espacio de disco"
                                      },
                                      {
                                        "id": 2,
                                        "descripcion": "Se permite hasta 5 sitios web"
                                      },
                                      {
                                        "id": 3,
                                        "descripcion": "Una Bases de datos ilimitada"
                                      },
                                      {
                                        "id": 4,
                                        "descripcion": "Frecuencia diaria de copia de seguridad automática"
                                      },
                                      {
                                        "id": 7,
                                        "descripcion": "Cuenta con descargas los primeros 5 meses de archivos Zip"
                                      },
                                      {
                                        "id": 8,
                                        "descripcion": "Cuenta con la restaurarciones del sitio web completo los primeros 3 meses "
                                      },
                                      {
                                        "id": 9,
                                        "descripcion": "Cuenta con restauración de archivos individuales los primeros 5 meses"
                                      }
                   ],
                      "valor": "1.60",
                      "unidad": "mes"
                    },
                    {
                      "id": 2,
                      "nombre": "Professional",
                      "descripcion": [
                                      {
                                        "id": 1,
                                        "descripcion": "Cuenta con 5 GB de espacio de disco"
                                      },
                                      {
                                        "id": 2,
                                        "descripcion": "Se permite hasta 10 sitios web"
                                      },
                                      {
                                        "id": 3,
                                        "descripcion": "Una Bases de datos ilimitada"
                                      },
                                      {
                                        "id": 4,
                                        "descripcion": "Frecuencia diaria de copia de seguridad automática"
                                      },
                                      {
                                        "id": 5,
                                        "descripcion": "Cuenta con copias de seguridad en demanda"
                                      },
                                      {
                                        "id": 6,
                                        "descripcion": "Cuenta con colas de Prioridad"
                                      },
                                      {
                                        "id": 7,
                                        "descripcion": "Cuenta con descargas ilimitadas de archivos Zip"
                                      },
                                      {
                                        "id": 8,
                                        "descripcion": "Cuenta con la restaurarciones del sitio web completo ilimitadas "
                                      },
                                      {
                                        "id": 9,
                                        "descripcion": "Cuenta con restauración de archivos individuales ilimitados"
                                      }
                                    ],
                      "valor": "4.48",
                      "unidad": "mes"
                    },
                    {
                      "id": 3,
                      "nombre": "Premium",
                      "descripcion": [
                                      {
                                        "id": 1,
                                        "descripcion": "Cuenta con 10 GB de espacio de disco"
                                      },
                                      {
                                        "id": 2,
                                        "descripcion": "Se permite hasta 25 sitios web"
                                      },
                                      {
                                        "id": 3,
                                        "descripcion": "Una Bases de datos ilimitada"
                                      },
                                      {
                                        "id": 4,
                                        "descripcion": "Frecuencia diaria de copia de seguridad automática"
                                      },
                                      {
                                        "id": 5,
                                        "descripcion": "Cuenta con copias de seguridad en demanda"
                                      },
                                      {
                                        "id": 6,
                                        "descripcion": "Cuenta con colas de Prioridad"
                                      },
                                      {
                                        "id": 7,
                                        "descripcion": "Cuenta con descargas ilimitadas de archivos Zip"
                                      },
                                      {
                                        "id": 8,
                                        "descripcion": "Cuenta con la restaurarciones del sitio web completo ilimitadas "
                                      },
                                      {
                                        "id": 9,
                                        "descripcion": "Cuenta con restauración de archivos individuales ilimitados"
                                      }
                                    ],
                      "valor": "8.35",
                      "unidad": "mes"
                    },
                    {
                      "id": 4,
                      "nombre": "Enterprise",
                      "descripcion": [
                                      {
                                        "id": 1,
                                        "descripcion": "Cuenta con 25 GB de espacio de disco"
                                      },
                                      {
                                        "id": 2,
                                        "descripcion": "Se permite hasta 100 sitios web"
                                      },
                                      {
                                        "id": 3,
                                        "descripcion": "Una Bases de datos ilimitada"
                                      },
                                      {
                                        "id": 4,
                                        "descripcion": "Frecuencia diaria de copia de seguridad automática"
                                      },
                                      {
                                        "id": 5,
                                        "descripcion": "Cuenta con copias de seguridad en demanda"
                                      },
                                      {
                                        "id": 6,
                                        "descripcion": "Cuenta con colas de Prioridad"
                                      },
                                      {
                                        "id": 7,
                                        "descripcion": "Cuenta con descargas ilimitadas de archivos Zip"
                                      },
                                      {
                                        "id": 8,
                                        "descripcion": "Cuenta con la restaurarciones del sitio web completo ilimitadas "
                                      },
                                      {
                                        "id": 9,
                                        "descripcion": "Cuenta con restauración de archivos individuales ilimitados"
                                      }
                                    ],
                      "valor": "15.28",
                      "unidad": "mes"
                    }
                  ],
        "preguntas": [],
        "caracteristicas": [
                            {
                              "id": 1,
                              "caracteristica": "Copias de seguridad automáticas",
                              "descripcion": "CodeGuard trabaja detrás de las escenas. Lo que significa que puede encenderlo y sentarse mientras CodeGuard toma regularmente copias de seguridad de sus datos."
                            },
                            {
                              "id": 2,
                              "caracteristica": "Configuración sin complicaciones",
                              "descripcion": "Dado que CodeGuard se basa en la nube , su puesta en marcha es muy fácil - sólo tiene que añadir a su sitio web los detalles de conexión para iniciar el proceso de copia de seguridad."
                            },
                            {
                              "id": 3,
                              "caracteristica": "30 días de garantía de devolución de dinero",
                              "descripcion": "Pruebe CodeGuard y vea lo fácil que es para asegurar su sitio web. Con nuestro período de devolución de 30 días, no tiene nada que perder."
                            }
                          ]
      }
  ];

  constructor(public modalCtrl: ModalController, public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
    this.tipoSeguridad = 1;
    this.seguridad = this.basedatos[0];
  }

  detalleAbajo(id){
    $('#' + id).slideToggle("slow");
    $( "#icon_"+ id ).toggleClass("ion-md-arrow-round-down");
    $( "#icon_"+ id ).toggleClass("ion-md-arrow-round-up");
  }

  onSegmentChange(valor){

  }

  cotizar(_item){
    const modal = this.modalCtrl.create('ModalCotizarPage', { item: _item });
    modal.present();
  }

  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeguridadPage');
  }

}
