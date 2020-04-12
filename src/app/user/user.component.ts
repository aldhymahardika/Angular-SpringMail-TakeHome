import { Component, OnInit } from '@angular/core';
import { Registrasi } from 'app/Model/Registrasi';
import { UniversitasService } from 'app/universitas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  regis: Registrasi = new Registrasi();
  submitted = false;

  constructor(private univService: UniversitasService, private router: Router) { }

  ngOnInit() {
    this.submitted=false;
  }

  saveInsert(saveInsert){
    this.regis = new Registrasi();
    this.regis.noKTP;
    this.regis.email;
    this.regis.nama;
    this.regis.noTelp;
    this.regis.namaOrangTua;
    this.regis.alamat;
    this.regis.namaAsalSekolah;
    this.regis.alamatAsalSekolah;
    this.regis.nilaiMTK;
    this.regis.nilaiBahasaIndo;
    this.regis.nilaiBahasaInggris;
    this.regis.nilaiMIPA;
    this.regis.status='peding'
    this.submitted=true;
    console.log(this.regis);
    this.insert(); 
  }

  insert(){
    this.univService.getInsert(this.regis).subscribe(data=>console.log(data), error=>console.log(error));
    this.regis = new Registrasi();
  }

  onSubmit(){
    this.submitted=true;
    this.insert();
  }
}
