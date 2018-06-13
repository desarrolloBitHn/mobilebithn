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

  basedatos = [{
    "id": 1,
    "nombreproducto": "Alojamiento compartido Linux",
    "descripcion": "Perfecto para sitios webs más pequeños y blogs. Incluye cPanel, PHP, Apache y más",
    "tiposervicio": "Alojamiento",
    "subtiposervicio": "Alojamiento compartido",
    "planes": [{
		    	"tipoplan":"Plan Básico",
		    	"valor":3.84,
		    	"descripcion":[{"1":"Dominio individual"},{"2":"5 GB Espacio en Disco"},{"3":"25 GB Transferencia de datos"},{"4":"20 Cuentas de correo"}]
		    },
		    {
		    	"tipoplan":"Plan Micro",
		    	"valor":9.59,
		    	"dominio": 1,
		    	"descripcion":[{"1":"Dominio individual"},{"2":"20 GB Espacio en Disco"},{"3":"400 GB Transferencia de datos"},{"4":"Ilimitado Cuentas de correo"}]
		    },
		    {
		    	"tipoplan":"Plan Profesional",
		    	"valor":17.16,
		    	"descripcion":[{"1":"Dominio individual"},{"2":"40 GB Espacio en Disco"},{"3":"500 GB Transferencia de datos"},{"4":"Ilimitado Cuentas de correo"}]
		    },
		    {
		    	"tipoplan":"Business",
		    	"valor":20.12,
		    	"descripcion":[{"1":"3 dominios"},{"2":"Ilimitado Espacio en Disco"},{"3":"Ilimitado Transferencia de datos"},{"4":"Ilimitado Cuentas de correo"}]
		    }
		]
	},
    {
    "id": 2,
    "nombreproducto": "Alojamiento compartido Windows",
    "descripcion": "Perfecto para sitios webs más pequeños y blogs. Incluye Plesk, ASP, IIS y más",
    "tiposervicio": "Alojamiento",
    "subtiposervicio": "Alojamiento compartido",
    "planes": [{
		    	"tipoplan":"Plan Básico",
		    	"valor":3.84,
		    	"descripcion":[{"1":"Dominio individual"},{"2":"5 GB Espacio en Disco"},{"3":"25 GB Transferencia de datos"},{"4":"20 Cuentas de correo"}]
		    },
		    {
		    	"tipoplan":"Plan Profesional",
		    	"valor":17.16,
		    	"descripcion":[{"1":"Dominio individual"},{"2":"40 GB Espacio en Disco"},{"3":"500 GB Transferencia de datos"},{"4":"Ilimitado Cuentas de correo"}]
		    },
		    {
		    	"tipoplan":"Plan Micro profesional",
		    	"valor":9.59,
		    	"descripcion":[{"1":"Dominio individual"},{"2":"20 GB Espacio en Disco"},{"3":"200 GB Transferencia de datos"},{"4":"Ilimitado Cuentas de correo"}]
		    },
		    {
		    	"tipoplan":"Business",
		    	"valor":20.12,
		    	"descripcion":[{"1":"5 dominios"},{"2":"Ilimitado Espacio en Disco"},{"3":"Ilimitado Transferencia de datos"},{"4":"Ilimitado Cuentas de correo"}]
		    }
		]
  	},
  	{
    "id": 3,
    "nombreproducto": "Alojamiento de Wordpress",
    "descripcion": "Una plataforma segura, confiable y potente diseñada para Wordpress",
    "tiposervicio": "Alojamiento",
    "subtiposervicio": "Alojamiento compartido",
    "planes": [{
		    	"tipoplan":"Standar Lite",
		    	"valor":8.4,
		    	"descripcion":[{"1":"1 instalación Wordpress"},{"2":"Dual Core CPU Core"},{"3":"2 GB RAM"},{"4":"5 GB Almacenamiento"},{"4":"Cuentas ilimitadas de correo electrónico"}]
		    },
		    {
		    	"tipoplan":"Plan Profesional",
		    	"valor":17.16,
		    	"descripcion":[{"1":"2 instalaciones Wordpress"},{"2":"Quad Core CPU Core"},{"3":"4 GB RAM"},{"4":"20 GB Almacenamiento"},{"4":"Cuentas ilimitadas de correo electrónico"}]
		    },
		    {
		    	"tipoplan":"Plan Micro profesional",
		    	"valor":9.59,
		    	"descripcion":[{"1":"3 instalaciones Wordpress"},{"2":"Hexa Core CPU Core"},{"3":"6 GB RAM"},{"4":"40 GB Almacenamiento"},{"4":"Cuentas ilimitadas de correo electrónico"}]
		    },
		    {
		    	"tipoplan":"Business",
		    	"valor":20.12,
		    	"descripcion":[{"1":"5 instalaciones Wordpress"},{"2":"Hexa Core CPU Core"},{"3":"6 GB RAM"},{"4":"40 GB Almacenamiento"},{"4":"Cuentas ilimitadas de correo electrónico"}]
		    }
		]
  	},
  	{
    "id": 3,
    "nombreproducto": "Alojamiento de Wordpress",
    "descripcion": "Una plataforma segura, confiable y potente diseñada para Wordpress",
    "tiposervicio": "Alojamiento",
    "subtiposervicio": "Alojamiento compartido",
    "planes": [{
		    	"tipoplan":"Standar Lite",
		    	"valor":8.4,
		    	"descripcion":[{"1":"1 instalación Wordpress"},{"2":"Dual Core CPU Core"},{"3":"2 GB RAM"},{"4":"5 GB Almacenamiento"},{"4":"Cuentas ilimitadas de correo electrónico"}]
		    },
		    {
		    	"tipoplan":"Plan Profesional",
		    	"valor":17.16,
		    	"descripcion":[{"1":"2 instalaciones Wordpress"},{"2":"Quad Core CPU Core"},{"3":"4 GB RAM"},{"4":"20 GB Almacenamiento"},{"4":"Cuentas ilimitadas de correo electrónico"}]
		    },
		    {
		    	"tipoplan":"Plan Micro profesional",
		    	"valor":9.59,
		    	"descripcion":[{"1":"3 instalaciones Wordpress"},{"2":"Hexa Core CPU Core"},{"3":"6 GB RAM"},{"4":"40 GB Almacenamiento"},{"4":"Cuentas ilimitadas de correo electrónico"}]
		    },
		    {
		    	"tipoplan":"Business",
		    	"valor":20.12,
		    	"descripcion":[{"1":"5 instalaciones Wordpress"},{"2":"Hexa Core CPU Core"},{"3":"6 GB RAM"},{"4":"40 GB Almacenamiento"},{"4":"Cuentas ilimitadas de correo electrónico"}]
		    }
		]
  	},
  	{
    "id": 4,
    "nombreproducto": "VPS Linux KVM",
    "descripcion": "Con la implementación de KVM Hypervisor para una experiencia de servidor dedicada rentable",
    "tiposervicio": "Alojamiento",
    "subtiposervicio": "Servidores",
    "planes": [{
		    	"tipoplan":"Standar",
		    	"valor":52.77,
		    	"descripcion":[{"1":"2 Cores"},{"2":"2 GB RAM"},{"3":"30 GB Almacenamiento SAN"},{"4":"1 TB Ancho de banda"},{"4":"0 IP Adicional"}]
		    },
		    {
		    	"tipoplan":"Enhanced",
		    	"valor":86.40,
		    	"descripcion":[{"1":"2 Cores"},{"2":"4 GB RAM"},{"3":"60 GB Almacenamiento SAN"},{"4":"2 TB Ancho de banda"},{"4":"1 IP Adicional"}]
		    },
		    {
		    	"tipoplan":"Premium",
		    	"valor":142.8,
		    	"descripcion":[{"1":"3 Cores"},{"2":"6 GB RAM"},{"3":"120 GB Almacenamiento SAN"},{"4":"3 TB Ancho de banda"},{"4":"1 IP Adicional"}]
		    },
		    {
		    	"tipoplan":"Elite",
		    	"valor":173.4,
		    	"descripcion":[{"1":"4 Cores"},{"2":"8 GB RAM"},{"3":"240 GB Almacenamiento SAN"},{"4":"3 TB Ancho de banda"},{"4":"1 IP Adicional"}]
		    }
		]
  	},
  	{
    "id": 5,
    "nombreproducto": "Servidores dedicados",
    "descripcion": "Hardware dedicado y rendimiento sin fallas; perfecto para sitios web extensos y applicaciones",
    "tiposervicio": "Alojamiento",
    "subtiposervicio": "Servidores",
    "planes": [{
		    	"tipoplan":"DS1",
		    	"valor":174,
		    	"descripcion":[{"1":"Intel E3-1220LV2"},{"2":"2.30 GHz Dual Core w/HT"},{"3":"4 GB RAM"},{"4":"1000 GB HDD en RAID 1"},{"4":"5 TB Ancho de Banda"}, {"5":"2 Gratis IPs"}]
		    },
		    {
		    	"tipoplan":"DS2",
		    	"valor":219,
		    	"descripcion":[{"1":"Intel E3-1268LV2"},{"2":"2.50 GHz Quad Core w/HT"},{"3":"4 GB RAM"},{"4":"1000 GB HDD en RAID 1"},{"4":"5 TB Ancho de Banda"}, {"5":"2 Gratis IPs"}]
		    },
		    {
		    	"tipoplan":"DS3",
		    	"valor":273,
		    	"descripcion":[{"1":"Intel E3-1268LV2"},{"2":"2.50 GHz Quad Core w/HT"},{"3":"8 GB RAM"},{"4":"1000 GB HDD en RAID 1"},{"4":"10 TB Ancho de Banda"}, {"5":"2 Gratis IPs"}]
		    },
		    {
		    	"tipoplan":"DS4",
		    	"valor":374,
		    	"descripcion":[{"1":"Intel E3-1230V2"},{"2":"3.20 GHz Quad Core w/HT"},{"3":"16 GB RAM"},{"4":"1000 GB HDD en RAID 1"},{"4":"15 TB Ancho de Banda"}, {"5":"2 Gratis IPs"}]
		    }
		]
  	},
  	{
    "id": 6,
    "nombreproducto": "Servidores administrados",
    "descripcion": "Consiga el poder de un servidor dedicado junto a nuestros expertos, quienes le ayudarán a administrar su servidor",
    "tiposervicio": "Alojamiento",
    "subtiposervicio": "Servidores",
    "planes": [{
		    	"tipoplan":"MS1",
		    	"valor":367.2,
		    	"descripcion":[{"1":"Intel E3-1220LV2"},{"2":"2.30 GHz Dual Core w/HT"},{"3":"4 GB RAM"},{"4":"1000 GB HDD en RAID 1"},{"4":"5 TB Ancho de Banda"}, {"5":"2 Gratis IPs"}]
		    },
		    {
		    	"tipoplan":"MS2",
		    	"valor":432,
		    	"descripcion":[{"1":"Intel E3-1265LV2"},{"2":"2.50 GHz Quad Core w/HT"},{"3":"4 GB RAM"},{"4":"1000 GB HDD en RAID 1"},{"4":"5 TB Ancho de Banda"}, {"5":"2 Gratis IPs"}]
		    },
		    {
		    	"tipoplan":"MS3",
		    	"valor":475.2,
		    	"descripcion":[{"1":"Intel E3-1265LV2"},{"2":"2.50 GHz Quad Core w/HT"},{"3":"8 GB RAM"},{"4":"1000 GB HDD en RAID 1"},{"4":"10 TB Ancho de Banda"}, {"5":"2 Gratis IPs"}]
		    },
		    {
		    	"tipoplan":"MS4",
		    	"valor":544.32,
		    	"descripcion":[{"1":"Intel E3-1230LV2"},{"2":"3.20 GHz Quad Core w/HT"},{"3":"16 GB RAM"},{"4":"1000 GB HDD en RAID 1"},{"4":"15 TB Ancho de Banda"}, {"5":"2 Gratis IPs"}]
		    }
		]
  	},
  	{
    "id": 7,
    "nombreproducto": "Alojamiento de revendedor Linux",
    "descripcion": "Empiece su negocio de hosting hoy. Incluye gratis WHM, cPanel y WHMCS",
    "tiposervicio": "Alojamiento",
    "subtiposervicio": "Alojamiento reseller",
    "planes": [{
		    	"tipoplan":"R0",
		    	"valor":14.4,
		    	"descripcion":[{"1":"20 GB Espacio en Disco"},{"2":"200 GB Transferencia de Datos"},{"3":"20 Sitios Web"},{"4":"Reventa soportada"}]
		    },
		    {
		    	"tipoplan":"R1",
		    	"valor":34.2,
		    	"descripcion":[{"1":"40 GB Espacio en Disco"},{"2":"800 GB Transferencia de Datos"},{"3":"Ilimitado Sitios Web"}]
		    },
		    {
		    	"tipoplan":"R2",
		    	"valor":37.8,
		    	"descripcion":[{"1":"50 GB Espacio en Disco"},{"2":"1000 GB Transferencia de Datos"},{"3":"Ilimitado Sitios Web"},{"4":"WHMCS gratis"}]
		    },
		    {
		    	"tipoplan":"R3",
		    	"valor":50.4,
		    	"descripcion":[{"1":"100 GB Espacio en Disco"},{"2":"2000 GB Transferencia de Datos"},{"3":"Ilimitado Sitios Web"},{"4":"WHMCS gratis"}]
		    },
		    {
		    	"tipoplan":"R4",
		    	"valor":76.5,
		    	"descripcion":[{"1":"200 GB Espacio en Disco"},{"2":"4000 GB Transferencia de Datos"},{"3":"Ilimitado Sitios Web"},{"4":"1WHMCS gratis"}]
		    }
		]
  	},
  	{
    "id": 8,
    "nombreproducto": "Sitio web de copia de respaldo de CodeGuard",
    "descripcion": "Su información es valiosa. Asegure su sitio web en apenas unos pocos minutos",
    "tiposervicio": "Alojamiento",
    "subtiposervicio": "Herramienta",
    "planes": [{
		    	"tipoplan":"Basic",
		    	"valor":1.6,
		    	"descripcion":[{"1":"1 GB Espacio en Disco"},{"2":"hasta 5 sitios web"},{"3":"Iliminado número de bases de datos"},{"4":"cada 5 días se hace copia automática de seguridad"}]
		    },
		    {
		    	"tipoplan":"Professional",
		    	"valor":4.48,
		    	"descripcion":[{"1":"5 GB Espacio en Disco"},{"2":"hasta 10 sitios web"},{"3":"Iliminado número de bases de datos"},{"4":"cada día se hace copia automática de seguridad"}]
		    },
		    {
		    	"tipoplan":"Premium",
		    	"valor":8.35,
		    	"descripcion":[{"1":"10 GB Espacio en Disco"},{"2":"hasta 25 sitios web"},{"3":"Iliminado número de bases de datos"},{"4":"cada día se hace copia automática de seguridad"}]
		    },
		    {
		    	"tipoplan":"Enterprise",
		    	"valor":15.28,
		    	"descripcion":[{"1":"25 GB Espacio en Disco"},{"2":"hasta 100 sitios web"},{"3":"Iliminado número de bases de datos"},{"4":"cada día se hace copia automática de seguridad"}]
		    }
		]
  	}
];

  constructor(public nav: Nav, public navCtrl: NavController, public navParams: NavParams) {
  }

  Inicio(){
    this.nav.setRoot('InicioPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FetchAlojamientosPage');
  }

  cardclick(item){

  }

}
