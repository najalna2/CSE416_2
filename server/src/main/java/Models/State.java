package Models;

public class State {
	private String name;
	private String abbreviation;
	private String capital;
	private String city;
	private int population;
	private int area;
	private int waterarea;
	private int landarea;
	private int houseseats;
	private String statehood;
	private String group;
	
	public State() {
		
	}
	
	public State(String name, String abbreviation, String capital, String city, int population, int area,
	int waterarea, int landarea, int houseseats, String statehood, String group) {
		
		this.name = name;
		this.abbreviation = abbreviation;
		this.capital = capital;
		this.city = city;
		this.population = population;
		this.area = area;
		this.waterarea = waterarea;
		this.landarea = landarea;
		this.houseseats = houseseats;
		this.statehood = statehood;
		this.group = group;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAbbreviation() {
		return abbreviation;
	}
	public void setAbbreviation(String abbreviation) {
		this.abbreviation = abbreviation;
	}
	public String getCapital() {
		return capital;
	}
	public void setCapital(String capital) {
		this.capital = capital;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getPopulation() {
		return population;
	}
	public void setPopulation(int population) {
		this.population = population;
	}
	public int getArea() {
		return area;
	}
	public void setArea(int area) {
		this.area = area;
	}
	public int getWaterarea() {
		return waterarea;
	}
	public void setWaterarea(int waterarea) {
		this.waterarea = waterarea;
	}
	public int getLandarea() {
		return landarea;
	}
	public void setLandarea(int landarea) {
		this.landarea = landarea;
	}
	public int getHouseseats() {
		return houseseats;
	}
	public void setHouseseats(int houseseats) {
		this.houseseats = houseseats;
	}
	public String getStatehood() {
		return statehood;
	}
	public void setStatehood(String statehood) {
		this.statehood = statehood;
	}
	public String getGroup() {
		return group;
	}
	public void setGroup(String group) {
		this.group = group;
	}
	
	
}
