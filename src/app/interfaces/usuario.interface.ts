 export interface EquipoSoftwareInterface {
	idEquipoSoftware?: number;
	serial?: string;
	nombreEquipo?: string;
	sisOperativo?: string;
	licencia?: string;
	dominioGrupo?: string;
	activo?: number;
}

export interface EquipoHadwareInterface {
	idEquipoHadware?: number;
	marca?:string;
	marcaMonitor?: string;
	tamanio?: string;
	modelo3?: string;
	serial4?: string;
	activo5?: string;
	marcaTeclado?: string;
	serial6?: string;
	marcaMouse?: string;
	serial7?: string;
	marcaCargador?: string;
	serial8?: string;
	macAdapInaWifi?: string;
	macAdapEthernet?: string;
	modelo?:string;
	tipo?:string;
	procesador?:string;
	fecuencia?:string;
	memRar?:string;
	capacidad?:string;
	discDuros?:string;
	tipo2:string;
}
export interface Content {
	id?: number;
	cenCos?: string;
	grupoAreaPertence?: string;
	nombre?: any;
	documento?: number;
	cargo?: string;
	archivoActaEntrega?: File | string;
	archivoFormatoActivo?: File | string;
	fechaAsignacion?: string;
	fechaCompra?: string;
	observacion?: string;
	estado?: string;
	equipoSoftware?: EquipoSoftwareInterface;
	equipoHadware?: EquipoHadwareInterface;
}

export interface Sort {
	empty: boolean;
	sorted: boolean;
	unsorted: boolean;
}

export interface Pageable {
	sort: Sort;
	offset: number;
	pageNumber: number;
	pageSize: number;
	unpaged: boolean;
	paged: boolean;
}


export interface Usuario {
	content: Content[];
	pageable: Pageable;
	last: boolean;
	totalElements: number;
	totalPages: number;
	size: number;
	number: number;
	sort: Sort;
	first: boolean;
	numberOfElements: number;
	empty: boolean;
}

export interface UsuarioResponse {
	usuarios: Usuario;
}


export class UsuarioCrear implements Content{
	id?: number | undefined;
	cenCos?: string = '';
	grupoAreaPertence?: string | undefined;
	nombre?: string = '';
	documento?: number;
	cargo?: string = '';
	archivoActaEntrega?: File ;
	archivoFormatoActivo?: File ;
	fechaAsignacion?: string = '';
	fechaCompra?: string = '';
	observacion?: string = '';
	estado?: string = '';
	equipoSoftware?: EquipoSoftwareInterface | undefined;
	equipoHadware?: EquipoHadwareInterface | undefined;

	
	

}
