import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {

    private videos: iVideos[] = [
        {
        index: '0',
        img: '../../../assets/img/italian ricotta gnocchi.jpg',
        title: 'Primerseishon',
        channel: 'Canalseishon Nueveishons',
        uploadedDate: 'ayerseishon'
        },
        {
        index: '2',
        img: '../../../assets/img/Untitled.png',
        title: 'Segundo video',
        channel: 'el channel >:D',
        uploadedDate: 'hace dos dias'
        },
        {
        index: '3',
        img: '../../../assets/img/Untitled.png',
        title: 'Tercer video',
        channel: 'cuingüinos =3',
        uploadedDate: 'hace 1 lustro'
        },
        {
        index: '4',
        img: '../../../assets/img/Untitled.png',
        title: 'Cuarto video',
        channel: 'gansitos :D',
        uploadedDate: 'hace 1 siglo'
        },
        {
        index: '5',
        img: '../../../assets/img/Untitled.png',
        title: 'Quinto video',
        channel: 'Chocorroles :B',
        uploadedDate: 'hace 6 days'
        },
        {
        index: '6',
        img: '../../../assets/img/Untitled.png',
        title: 'Sexto video',
        channel: 'Bimbuñuelos :P',
        uploadedDate: 'hace 1 milenio'
        },
        {
        index: '7',
        img: '../../../assets/img/Untitled.png',
        title: 'Séptimo video',
        channel: 'Dalmatas :V',
        uploadedDate: 'hace dos decadas'
        },
        {
        index: '8',
        img: '../../../assets/img/Untitled.png',
        title: 'Octavio video',
        channel: 'Caramelos C:',
        uploadedDate: 'hace cuatro decadas'
        },
];
    constructor() {
        console.log('constructorseishon listeishon para usarseishon :D!');
    }
    getVideos(): iVideos[] {
       return this.videos;
    }
}
        // tslint:disable-next-line: align
       export interface iVideos {
            index: string;
            img: string;
            title: string;
            channel: string;
            uploadedDate: string;
        };