package Services;

import java.util.ArrayList;
import java.util.List;

import Models.State;

public class StateServices {
	public List<State> getAllStates(){
		State fl = new State("florida", "FL", "Tallahassee", "Jacksonville", 19552860, 170312, 31424, 138888, 27, "1845-03-03", "US States");
		State ar = new State("arkansas", "AR", "Little Rock", "Little Rock", 2959373, 137733, 2960, 134770, 4, "1836-06-15", "US States");
		State ms = new State("mississippi", "MS", "Jackson", "Jackson", 2991207, 125438, 3908, 121530, 4, "1817-12-10", "US States");
		
		
		List<State> list = new ArrayList<State>();
		list.add(fl);
		list.add(ar);
		list.add(ms);
		
		return list;
	}

}
