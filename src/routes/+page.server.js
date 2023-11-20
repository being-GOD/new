// export let arr_ltt=[];

export function load({ cookies }) {
	

	const visited = cookies.get('visited');
	const Requirment = cookies.get('Requirment');
	
    // arr_ltt.push(cookies.get('Requirment'));
    // arr_ltt.push(cookies.get('Stage of Property purchase'));
    // arr_ltt.push(cookies.get('Property Location (State)'));
    // arr_ltt.push(cookies.get('Property Location (City)'));
    // arr_ltt.push(cookies.get('Working Location (State)'));
    // arr_ltt.push(cookies.get('Working Location (City)'));
    // arr_ltt.push(cookies.get('Current Financial Name'));
    // arr_ltt.push(cookies.get('Current Financial Location'));
    // arr_ltt.push(cookies.get('Current Financial ROI'));
    // arr_ltt.push(cookies.get('Referral Code (Name)'));
    // arr_ltt.push(cookies.get('Referral Code(Mobile No.)'));
    // arr_ltt.push(cookies.get('User (Name)'));
    // arr_ltt.push(cookies.get('User (Mobile No.)'));
    // arr_ltt.push(cookies.get('User (Email)'));

	
	
	
	
	return {
		visited,
		Requirment
	};
}
