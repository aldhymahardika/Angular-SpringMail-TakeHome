import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Registrasi } from 'app/Model/Registrasi';
import { UniversitasService } from 'app/universitas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css']
})
export class RejectComponent implements OnInit {

  regis: Observable<Registrasi[]>
  Regis : Registrasi = new Registrasi();
  reject:string = 'reject';
  idRegis:number

  constructor(private router: ActivatedRoute, private univService: UniversitasService, private route: Router) { }

  ngOnInit() {
      this.idRegis = this.router.snapshot.paramMap.get['idRegis'];
      this.reloadData();
  }

  reloadData(){
    this.regis = this.univService.getListApprove(this.reject);
}

updateApproved(idRegis:number, status:string){
  this.univService.getUpdate(idRegis, status).subscribe(data=>{
    this.reloadData();
  },
  error=>console.log(error));
}

update(data:Registrasi){
  this.router.queryParams.subscribe(params=>{
    this.Regis.idRegis = params.id
    this.Regis.status='reject'
    this.updateApproved(params.id, this.Regis.status)
  })
  this.reloadData()
}
}
