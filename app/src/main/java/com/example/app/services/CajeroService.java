package com.example.app.services;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.app.models.ClienteModel;
import com.example.app.models.DescripcionModel;
import com.example.app.models.ProductoModel;
import com.example.app.models.TarjetaModel;
import com.example.app.models.VentaModel;
import com.example.app.repositories.ClienteRepositorie;
import com.example.app.repositories.DescripcionRepositorie;
import com.example.app.repositories.ProductoRepositorie;
import com.example.app.repositories.TarjetaRepositorie;
import com.example.app.repositories.VentaRepositorie;

@Service
public class CajeroService {
    @Autowired
    ProductoRepositorie productoRepositorie;
    @Autowired
    ClienteRepositorie  clienteRepositorie;
    @Autowired
    VentaRepositorie ventaRepositorie;
    @Autowired
    DescripcionRepositorie descripcionRepositorie;
    @Autowired
    TarjetaRepositorie tarjetaRepositorie;

    @PersistenceContext
    public EntityManager entityManager;

    public HttpStatus IngresarCliente(ClienteModel clienteModel){
        ClienteModel tmp = (ClienteModel)clienteRepositorie.findByNit(clienteModel.getNit());
        if(tmp ==null){
            clienteRepositorie.save(clienteModel);
            return HttpStatus.OK;
        }else{
            return HttpStatus.BAD_GATEWAY;
        }
    }

    public void ActualizarCliente(ClienteModel clienteModel){
        clienteRepositorie.save(clienteModel);
    }

    @Transactional
    public ArrayList<ProductoModel> getProductos(String Sucursal){
        System.out.println("PRODUCTOS");
        String sql = "SELECT P.Id, P.Nombre, P.Marca, P.Sucursal, P.Precio, P.Pasillo, E.Cantida " +
                 "FROM manejoproducto.Estantes AS E " +
                 "JOIN manejoproducto.Producto AS P ON E.Producto = P.Id " +
                 "WHERE E.Sucursal = :sucursal"; 
    
        Query query = entityManager.createNativeQuery(sql, ProductoModel.class);
        query.setParameter("sucursal", Sucursal);
        List<ProductoModel> productos = query.getResultList();
        return new ArrayList<>(productos);
    }

    @Transactional
    public void GuardarDescripcion(DescripcionModel descripcionModel){
        String jpql = "INSERT INTO ventas.descripcion(factura,producto,cantidad,total) VALUES(:valor1,:valor2,:valor3,:valor4)";
        entityManager.createNativeQuery(jpql)
            .setParameter("valor1", descripcionModel.getFactura())
            .setParameter("valor2", descripcionModel.getProducto())
            .setParameter("valor3", descripcionModel.getCantidad())
            .setParameter("valor4", descripcionModel.getTotal())
            .executeUpdate();
    }
    

    public void GuardarVenta(VentaModel ventaModel){
        ventaRepositorie.save(ventaModel);
    }

    public ArrayList<DescripcionModel> getDescripciones(){
        return (ArrayList<DescripcionModel>) descripcionRepositorie.findAll();
    }

    public ClienteModel getCliente(String nit){
        return clienteRepositorie.findByNit(nit);
    }

    public TarjetaModel getTarjeta(String nit){
        return tarjetaRepositorie.findByCliente(nit);
    }

    public void ActualizarTarjeta(TarjetaModel tarjetaModel){
        tarjetaRepositorie.save(tarjetaModel);
    }

}
