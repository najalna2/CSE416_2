package Services;

import java.util.ArrayList;
import java.util.List;

import Models.District;





public class DistrictServices {
	public List<District> getFLDistricts(){
		District f1 = new District("MS", "Elijah Davis", 1, "Rep.", "Won", 100, 0.99263, 334);
		District f2 = new District("MS", "Ethan Moore", 2, "Dem.", "Lost", 100, 0.16248, 457);
		District f3 = new District("MS", "Olivia Smith", 3, "Dem.", "Won", 100, 0.66466, -490);
		District f4 = new District("MS", "Liam Johnson", 4, "Rep.", "Won", 100, 0.92489, -44);
		District f5 = new District("MS", "Elijah Davis", 5, "Rep.", "Won", 100, 0.99263, 334);
		District f6 = new District("MS", "Ethan Moore", 6, "Dem.", "Lost", 100, 0.16248, 457);
		District f7 = new District("MS", "Olivia Smith", 7, "Dem.", "Won", 100, 0.66466, -490);
		District f8 = new District("MS", "Liam Johnson", 8, "Rep.", "Won", 100, 0.92489, -44);
		District f9 = new District("MS", "Elijah Davis", 9, "Rep.", "Won", 100, 0.99263, 334);
		District f10 = new District("MS", "Ethan Moore", 10, "Dem.", "Lost", 100, 0.16248, 457);
		District f11 = new District("MS", "Olivia Smith", 11, "Dem.", "Won", 100, 0.66466, -490);
		District f12 = new District("MS", "Liam Johnson", 12, "Rep.", "Won", 100, 0.92489, -44);
		District f13 = new District("MS", "Elijah Davis", 13, "Rep.", "Won", 100, 0.99263, 334);
		District f14 = new District("MS", "Ethan Moore", 14, "Dem.", "Lost", 100, 0.16248, 457);
		District f15 = new District("MS", "Olivia Smith", 15, "Dem.", "Won", 100, 0.66466, -490);
		District f16 = new District("MS", "Liam Johnson", 16, "Rep.", "Won", 100, 0.92489, -44);
		District f17 = new District("MS", "Elijah Davis", 17, "Rep.", "Won", 100, 0.99263, 334);
		District f18 = new District("MS", "Ethan Moore", 18, "Dem.", "Lost", 100, 0.16248, 457);
		District f19 = new District("MS", "Olivia Smith", 19, "Dem.", "Won", 100, 0.66466, -490);
		District f20 = new District("MS", "Liam Johnson", 20, "Rep.", "Won", 100, 0.92489, -44);
		District f21 = new District("MS", "Elijah Davis", 21, "Rep.", "Won", 100, 0.99263, 334);
		District f22 = new District("MS", "Ethan Moore", 22, "Dem.", "Lost", 100, 0.16248, 457);
		District f23 = new District("MS", "Olivia Smith", 23, "Dem.", "Won", 100, 0.66466, -490);
		District f24 = new District("MS", "Liam Johnson", 24, "Rep.", "Won", 100, 0.92489, -44);
		District f25 = new District("MS", "Elijah Davis", 25, "Rep.", "Won", 100, 0.99263, 334);
		District f26 = new District("MS", "Ethan Moore", 26, "Dem.", "Lost", 100, 0.16248, 457);
		District f27 = new District("MS", "Olivia Smith", 27, "Dem.", "Won", 100, 0.66466, -490);
		District f28 = new District("MS", "Liam Johnson", 28, "Rep.", "Won", 100, 0.92489, -44);		
		
		
		List<District> list = new ArrayList<District>();
		list.add(f1);list.add(f2);list.add(f3);list.add(f4);
		list.add(f5);list.add(f6);list.add(f7);list.add(f8);
		list.add(f9);list.add(f10);list.add(f11);list.add(f12);
		list.add(f13);list.add(f14);list.add(f15);list.add(f16);
		list.add(f17);list.add(f18);list.add(f19);list.add(f20);
		list.add(f21);list.add(f22);list.add(f23);list.add(f24);
		list.add(f25);list.add(f26);list.add(f27);list.add(f28);		
		
		return list;
	}
	
	public List<District> getMSDistricts(){
		District m1 = new District("MS", "Elijah Davis", 1, "Rep.", "Won", 100, 0.99263, 334);
		District m2 = new District("MS", "Ethan Moore", 2, "Dem.", "Lost", 100, 0.16248, 457);
		District m3 = new District("MS", "Olivia Smith", 3, "Dem.", "Won", 100, 0.66466, -490);
		District m4 = new District("MS", "Liam Johnson", 4, "Rep.", "Won", 100, 0.92489, -44);
		
		List<District> list = new ArrayList<District>();
		list.add(m1);
		list.add(m2);
		list.add(m3);
		list.add(m4);

		return list;
	}
	
	public List<District> getARDistricts(){
		District a1 = new District("AR", "Daniel Nelson", 1, "Rep.", "Won", 100, 0.01636, -103);
		District a2 = new District("AR", "Oliver Garcia", 2, "Dem.", "Won", 100, 0.54491, -173);
		District a3 = new District("AR", "Olivia Smith", 3, "Dem.", "Won", 100, 0.50654, 286);
		District a4 = new District("AR", "Lucas Martinez", 4, "Rep.", "Won", 100, 0.01243, 112);

		List<District> list = new ArrayList<District>();
		list.add(a1);
		list.add(a2);
		list.add(a3);
		list.add(a4);
		
		return list;
	}
	
	public List<District> getDistricts(String str) {
		if (str.equals("AR")){
			return this.getARDistricts();
		}
		else if (str.equals("MS")){
			return this.getMSDistricts();
		}	
		else if (str.equals("FL")){
			return this.getFLDistricts();
		}		
		
		return null;
	}
	public District getDistricts(String str, String num) {
		if (str.equals("AR")){
			return this.getARDistricts().get(Integer.parseInt(num)-1);
		}
		else if (str.equals("MS")){
			return this.getMSDistricts().get(Integer.parseInt(num)-1);
		}	
		else if (str.equals("FL")){
			return this.getFLDistricts().get(Integer.parseInt(num)-1);
		}		
		
		return null;
	}
}
