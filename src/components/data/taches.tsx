
class taches {
    id:Int16Array;
    titre: string;
    accroche:string;
    description:string;
    status:string;
    date_publication:String;


    constructor( titre: string, accroche: string,status:string,date_publication:string) {
    this.titre = titre;
    this.accroche = accroche;
    this.date_publication = date_publication;
    this.status=status;

    }

    }

    let taches1= new taches("tache1","accroche de la tache","disponible", '12/11/2023' );
     