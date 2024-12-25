import { Injectable } from "@angular/core";
import * as AuctionItems from '../data/auction-items.json';
import { players } from './players';
import { gameCards } from './data';

@Injectable({ providedIn: 'root' })
export class DataService {
    get AuctionItems() : IAuctionItem[] {
        return AuctionItems as IAuctionItem[];
    }

    get Players() : IPlayer[] {
        return players as IPlayer[];
    }

    get GameCards() : IGameCard[] { 
        return gameCards as IGameCard[];
    }
}

export interface IPlayer {
    id: number;
    name: string;
    image: string;
}

export interface IAuctionItem {
    id: number;
    name: string;
    image: string;
}

export interface IMiniGame {
    id: number;
    name: string;
    type: string;
}



export enum CardGameState {
  Ready,
  InProgress,
  Complete
}

export enum GameCardType {
    AuctionItem,
    MiniGame,
}

export interface IGameCard {
    id: number;
    type: GameCardType;
    name: string;
    icon: string;
    state?: CardGameState;
}

