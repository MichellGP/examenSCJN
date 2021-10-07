export interface Correspondencia {
    correoLocalID:     number;
    oficio:            string;
    expediente:        string;
    tipoPaqueteDesc:       string;
    numeroPaquete:     number;
    remitente:         string;
    destinatario:      string;
    fechaEnvio:        Date;
    fechaNotificacion: Date | null;
}
