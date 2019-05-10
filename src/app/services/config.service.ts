import { Injectable } from '@angular/core';
import { configuration } from '../configuration';

@Injectable({ providedIn: 'root' })

export class ConfigService {

    config = configuration;

    constructor() { }

    getConfigFromService() { return this.config; }

}
