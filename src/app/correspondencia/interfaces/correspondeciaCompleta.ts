export interface CorrespondenciaCompleta {
    correoLocalID:        number;
    fechaEnvio:           Date;
    numeroPaquete:        number;
    oficio:               string;
    tipoPaqueteID:        number;
    remitente:            string;
    destinatario:         string;
    fechaNotificacion:    Date;
    expediente:           string;
    fechaCreacion:        Date;
    fechaActualizacion:   Date;
    usuarioCreacion:      string;
    usuarioActualizacion: string;
    codigoDeBarras:       string;
}
