import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Registrasi } from 'app/Model/Registrasi';
import { UniversitasService } from 'app/universitas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  regis: Observable<Registrasi[]>
  Regis : Registrasi = new Registrasi();
  approve :string = 'approve'
  idRegis:number

  constructor(private router: ActivatedRoute, private univService: UniversitasService, private route: Router) { }

  ngOnInit() {
      this.idRegis = this.router.snapshot.paramMap.get['idRegis'];
      this.reloadData();
  }

  reloadData(){
      this.regis = this.univService.getListApprove(this.approve);
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
      this.Regis.status='approve'
      this.updateApproved(params.id, this.Regis.status)
    })
    this.reloadData()
  }

}
