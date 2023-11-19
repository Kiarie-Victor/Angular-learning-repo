import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit{

  roomList : RoomList[] = []
  constructor(){}
  ngOnInit(): void {
     this.roomList = [
      {
        roomNumber:1,
        roomType:"Delux Room",
        amenities:"Air Conditioning, Free wifi",
        price: 1000,
        checkInTime:new Date("11-Nov-2021"),
        checkOutTime:new Date("13-Nov-2021"),
        rating:4.4,
      },
      {
        roomNumber:2,
        roomType:"Hd Room",
        amenities:"Conditioning, Free wifi",
        price: 4000,
        checkInTime:new Date("15-Nov-2021"),
        checkOutTime:new Date("18-Nov-2021"),
        rating:6.3
      },
    {
      roomNumber:3,
    
      roomType:"Private Room",
        amenities:"Air Conditioning, Free wifi",
        price: 15000,
        checkInTime:new Date("11-Nov-2021"),
        checkOutTime:new Date("13-Nov-2021"),
        rating:7.9,
    }] ;
  }
  hotelName:string = "Hilton Hotel";
 
  hideRooms:boolean = false
  rooms : Room ={
    totalRooms:15,
    availableRooms:7,
    bookedRooms:3
  }
 numberOfRooms:number = this.rooms.totalRooms

  toggle (){
    this.hideRooms = !this.hideRooms
  }

  selectRoom(room:RoomList){
    console.log(room)
  }

  addRoom(){
    let newRoom: RoomList={
      roomNumber:4,
      amenities:"Air bla",
      price:7557,
      rating:6.8,
      roomType:"SoftLife",
      checkInTime: new Date("11-4-2023"),
      checkOutTime:new Date("14-4-2023"),

    }
    this.roomList = [...this.roomList, newRoom]
  }

}
