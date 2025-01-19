package com.nt.service;




import org.springframework.data.domain.Page;

import com.nt.entity.Doctor;

public interface IDoctorService {

	public Iterable<Doctor> ShowDoctorBySorting(boolean asc,String...props);
	
	public Page<Doctor> showDoctorsInfoByPageNo(int PageNo,int PageSize,boolean ascOrder,String props);
	
}
