import { Component, OnInit } from '@angular/core';
import { Registrasi } from 'app/Model/Registrasi';
import { Observable } from 'rxjs'
import { UniversitasService } from 'app/universitas.service';
import { Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

    regis: Observable<Registrasi[]>

    constructor(private univService: UniversitasService, private route: Router) { }

    ngOnInit() {
        this.reloadData();
    }

    reloadData(){
        this.regis = this.univService.getList();
    }

    // updateId(){
    //     this.univService.getId(this.Regis.idRegis).subscribe(data=>{
    //         console.log(this.Regis.idRegis);
    //         // this.Regis.idRegis=data.idRegis
    //         // this.Regis.status=data.status='reject'
    //         // console.log(this.Regis);
    //         // this.univService.getUpdate(data.id, data.status);
    //     })
    // }

    updateApprove(idRegis:number){
        this.route.navigate(['/approve'], {queryParams: {id: idRegis}})
    }

    updateReject(idRegis:number){
        this.route.navigate(['/reject'], {queryParams: {id: idRegis}})
    }

    // updateApprove(idRegis:number, status:string){
    //     this.univService.getListApprove(this.coba).subscribe(data=>{
    //         this.Regis.status= data.status = 'reject'
    //         this.univService.getUpdate(this.Regis.idRegis, data.status)
    //     })
    // }

    // updateReject(){
    //     this.Regis = new Registrasi();
    //     this.Regis.idRegis
    //     this.Regis.status='reject'
    //     this.univService.getUpdate(this.Regis.idRegis, this.Regis.status).subscribe(data=>{
    //         this.isupdate=true;
    //         this.univService.getList().subscribe(data=>{
    //             this.Regis=data
    //         })
    //     },
    //     error=>console.log(error));
    // }

    // Reject(idRegis:number){
    //     this.univService.getId(idRegis).subscribe(data=>{
    //         this.Regis.idRegis=data.idRegis
    //         this.Regis.status=data.status='reject'
    //         console.log(this.Regis);
    //         this.univService.getUpdate(data.id, data.status);
    //     })
    // }
}
