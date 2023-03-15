import { Injectable, Output, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { User } from "../models/core.models";

@Injectable()
export class SharedService {
    @Output() loggedInUser: EventEmitter<User> = new EventEmitter();

    constructor(private http: HttpClient) {

    }

    set User(user: User) {
        this.loggedInUser.emit(user)
    }
}