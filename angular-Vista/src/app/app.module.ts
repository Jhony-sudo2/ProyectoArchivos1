import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { RegistrocComponent } from './components/registroc/registroc.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CajeroComponent } from './cajerocomponent/cajero/cajero.component';
import { VentaComponent } from './cajerocomponent/venta/venta.component';
import { ClienteComponent } from './cajerocomponent/cliente/cliente.component';
import { ProductoComponent } from './bodegacomponent/producto/producto.component';
import { BodegaComponent } from './bodegacomponent/bodega/bodega.component';
import { InformacionComponent } from './inventcomponent/informacion/informacion.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { InventarioComponent } from './inventcomponent/inventario/inventario.component';
import { EstanteComponent } from './inventcomponent/estante/estante.component';
import { IngresoComponent } from './bodegacomponent/ingreso/ingreso.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { CookieService } from 'ngx-cookie-service';
import { Reporte2Component } from './components/reporte2/reporte2.component';

const appRoutes:Routes=[]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    TarjetasComponent,
    RegistrocComponent,
    NotFoundComponent,
    CajeroComponent,
    VentaComponent,
    ClienteComponent,
    ProductoComponent,
    BodegaComponent,
    InformacionComponent,
    InventarioComponent,
    EstanteComponent,
    IngresoComponent,
    UsuarioComponent,
    Reporte2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
