package Models;

public class District {
	
	private String state;
	private String name;
	private int district_number;
	private String party;
	private String election_results;
	private int total_population;
	private double geo_variance;
	private int pop_variance;
	
	public District() {
	
	}





	public District(String state, String name, int district_number, String party, String election_results,
			int total_population, double geo_variance, int pop_variance) {
		super();
		this.state = state;
		this.name = name;
		this.district_number = district_number;
		this.party = party;
		this.election_results = election_results;
		this.total_population = total_population;
		this.geo_variance = geo_variance;
		this.pop_variance = pop_variance;
	}



	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	
	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}

	public int getDistrict_number() {
		return district_number;
	}

	public void setDistrict_number(int district_number) {
		this.district_number = district_number;
	}

	public String getParty() {
		return party;
	}

	public void setParty(String party) {
		this.party = party;
	}

	public String getElection_results() {
		return election_results;
	}

	public void setElection_results(String election_results) {
		this.election_results = election_results;
	}

	public int getTotal_population() {
		return total_population;
	}

	public void setTotal_population(int total_population) {
		this.total_population = total_population;
	}

	public double getGeo_variance() {
		return geo_variance;
	}

	public void setGeo_variance(double geo_variance) {
		this.geo_variance = geo_variance;
	}

	public int getPop_variance() {
		return pop_variance;
	}

	public void setPop_variance(int pop_variance) {
		this.pop_variance = pop_variance;
	}
	
	
	

}
