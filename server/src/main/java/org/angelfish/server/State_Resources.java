package org.angelfish.server;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import Models.District;
import Models.State;
import Services.DistrictServices;
import Services.StateServices;



@Path("states")

public class State_Resources{
	
	StateServices ss = new StateServices();
	DistrictServices ds = new DistrictServices();

	
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<State> getState() {
        return ss.getAllStates();
    }
    
    @GET
    @Path("/{state_abr}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<District> getDistricts(@PathParam("state_abr") String state_abr) {
    	return ds.getDistricts(state_abr);
    }    
    
    @GET
    @Path("/{state_abr}/{district_num}")
    @Produces(MediaType.APPLICATION_JSON)
    public District getDistricts(@PathParam("state_abr") String state_abr, @PathParam("district_num") String district_num) {
    	return ds.getDistricts(state_abr, district_num);
    }       
    
}
