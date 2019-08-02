import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {

    private videos: iVideos[] = [
        {
        index: '1',
        img: '../../../assets/img/italian ricotta gnocchi.jpg',
        title: 'Primerseishon videishon',
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
        index: '2',
        img: '../../../assets/img/Untitled.png',
        title: 'Segundo video',
        channel: 'el channel >:D',
        uploadedDate: 'hace dos dias'
        },
        {
        index: '2',
        img: '../../../assets/img/Untitled.png',
        title: 'Segundo video',
        channel: 'gansitos :D',
        uploadedDate: 'hace trs decadas'
        },
        {
        index: '2',
        img: '../../../assets/img/Untitled.png',
        title: 'Segundo video',
        channel: 'gansitos :D',
        uploadedDate: 'hace trs decadas'
        },
        {
        index: '2',
        img: '../../../assets/img/Untitled.png',
        title: 'Segundo video',
        channel: 'gansitos :D',
        uploadedDate: 'hace trs decadas'
        },
        {
        index: '2',
        img: '../../../assets/img/Untitled.png',
        title: 'Segundo video',
        channel: 'gansitos :D',
        uploadedDate: 'hace trs decadas'
        },
        {
        index: '2',
        img: '../../../assets/img/Untitled.png',
        title: 'Segundo video',
        channel: 'gansitos :D',
        uploadedDate: 'hace trs decadas'
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