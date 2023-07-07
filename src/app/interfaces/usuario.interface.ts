 export interface EquipoSoftwareInterface {
	idEquipoSoftware: number;
	serial?: string;
	nombreEquipo?: string;
	sisOperativo?: string;
	licencia?: string;
	dominioGrupo?: string;
	activo?: number;
}

export interface EquipoHadwareInterface {
	idEquipoHadware: number;
	marcaMOnitor?: string;
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
}
export interface Content {
	id: number;
	cenCos?: any;
	grupoAreaPertence?: any;
	nombre?: any;
	documento: number;
	cargo?: any;
	rutaActaEntrega?: any;
	rutaFormatoActivo?: any;
	fechaAsignacion?: any;
	fechaCompra?: any;
	observacion?: any;
	estado?: any;
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