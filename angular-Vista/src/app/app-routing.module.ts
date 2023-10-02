import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { RegistrocComponent } from './components/registroc/registroc.component';
import { CajeroComponent } from './cajerocomponent/cajero/cajero.component';
import { VentaComponent } from './cajerocomponent/venta/venta.component';
import { ClienteComponent } from './cajerocomponent/cliente/cliente.component';
import { BodegaComponent } from './bodegacomponent/bodega/bodega.component';
import { ProductoComponent } from './bodegacomponent/producto/producto.component';
import { InformacionComponent } from './inventcomponent/informacion/informacion.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InventarioComponent } from './inventcomponent/inventario/inventario.component';
import { EstanteComponent } from './inventcomponent/estante/estante.component';
import { IngresoComponent } from './bodegacomponent/ingreso/ingreso.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';

const routes: Routes = [
  {path:'',component:LoginComponent,canActivate:[authGuard]},
  {path:'admin',component:AdminComponent,
    children:[
    {path:'',redirectTo:'Registro',pathMatch:'full'},
    {path:'Reportes',component:ReporteComponent},
    {path:'Tarjetas',component:TarjetasComponent},
    {path:'Registro',component:RegistrocComponent},    
    {path:'usuario',component:UsuarioComponent}
  ]},
  {path:'caja',component:CajeroComponent,
  children:[
    {path:'',redirectTo:'venta',pathMatch:'full'},
    {path:'venta',component:VentaComponent},
    {path:'cliente',component:ClienteComponent},
  ]},
  {path:'bodega',component:BodegaComponent,
  children:[
    {path:'',redirectTo:'producto',pathMatch:'full'},
    {path:'producto',component:ProductoComponent},
    {path:'ingreso',component:IngresoComponent}
  ]},
  {path:'inventario',component:InventarioComponent,
  children:[
    {path:'',redirectTo:'estante',pathMatch:'full'},
    {path:'informacion',component:InformacionComponent},
    {path:'estante',component:EstanteComponent}
  ]},
  {path:'**',component:NotFoundComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
