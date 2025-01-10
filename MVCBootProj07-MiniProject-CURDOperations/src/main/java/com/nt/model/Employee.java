package com.nt.model;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "emp")
@Data
public class Employee implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @SequenceGenerator(name = "gen1", sequenceName = "emp_id_seq", initialValue = 1, allocationSize = 1)
    @GeneratedValue(generator = "gen1", strategy = GenerationType.SEQUENCE)
    @Column(name = "EMPNO")
    private Integer empno;

    @Column(name = "ENAME", length = 10)
    private String ename;

    @Column(name = "JOB", length = 9)
    private String job;

    @Column(name = "MGR")
    private Integer mgr; // Manager ID

    @Column(name = "HIREDATE")
    private Date hiredate; // Date type

    @Column(name = "SAL", precision = 7, scale = 2)
    private Float sal;

    @Column(name = "COMM", precision = 7, scale = 2)
    private Float comm; // Commission

    @Column(name = "DEPTNO")
    private Integer deptno;
    
   


}
