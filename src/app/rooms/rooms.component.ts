import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName:string = "Hilton Hotel";
 
  hideRooms:boolean = false
  rooms : Room ={
    totalRooms:15,
    availableRooms:7,
    bookedRooms:3
  }
 numberOfRooms:number = this.rooms.totalRooms
  roomList:RoomList[]=[{
    roomNumber:1,
    roomType:"Delux Room",
    amenities:"Air Conditioning, Free wifi",
    price: 1000,
    checkInTime:new Date("11-Nov-2021"),
    checkOutTime:new Date("13-Nov-2021")
  },
  {
    roomNumber:2,
    roomType:"Hd Room",
    amenities:"Conditioning, Free wifi",
    price: 4000,
    checkInTime:new Date("15-Nov-2021"),
    checkOutTime:new Date("18-Nov-2021")
  },
{
  roomNumber:3,

  roomType:"Private Room",
    amenities:"Air Conditioning, Free wifi",
    price: 15000,
    checkInTime:new Date("11-Nov-2021"),
    checkOutTime:new Date("13-Nov-2021")
}]

  toggle (){
    this.hideRooms = !this.hideRooms
  }

}
