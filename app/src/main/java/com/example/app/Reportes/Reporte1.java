package com.example.app.Reportes;

import java.math.BigInteger;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Reporte1 {
    @JsonProperty("sucursal")
    private String sucursal;

    @JsonProperty("nombre")
    private String nombre;

    @JsonProperty("producto")
    private String producto;

    @JsonProperty("total")
    private BigInteger total;

    

    public String getSucursal() {
        return sucursal;
    }
    public void setSucursal(String sucursal) {
        this.sucursal = sucursal;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getProducto() {
        return producto;
    }
    public void setProducto(String producto) {
        this.producto = producto;
    }
    public BigInteger getTotal() {
        return total;
    }
    public void setTotal(BigInteger total) {
        this.total = total;
    }

}
