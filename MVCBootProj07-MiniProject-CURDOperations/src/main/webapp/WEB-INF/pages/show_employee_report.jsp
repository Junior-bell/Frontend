<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    <%@page isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Employee Report </title>
</head>
<body>
<c:choose>
<c:when test="${!empty empList}">
<h1 style="color:red; text-align:center">Employee Report </h1>
<h2 style="color:green;text-align:center">${resultMsg}</h2>
<table border="1" align="center" bgcolor="cyan" >
<tr style="color:red"><th>emp name</th><th>job</th><th>salary</th><th>deptno</th></tr>
<c:forEach var="emp" items="${empList}">
<tr style="color:blue">
<td>${emp.empno}</td>
<td>${emp.ename}</td>
<td>${emp.job }</td>
<td>${emp.sal }</td>
<td>${emp.deptno }</td>
<td><a href="emp_edit?no=${emp.empno}"><img alt="" src="images/edit.png" width="30px" height="30px"></a>
<td><a href="emp_delete?no=${emp.empno}"><img alt="" src="images/delete.png" width="30px" height="30px"></a>
</tr>
</c:forEach>
</table>
</c:when>
<c:otherwise>
<h1 style="color:red;text-align=center">Employees not found </h1>
</c:otherwise>
</c:choose>
<center>
<a href="emp_add"><img src="images/add.png" width="40px" height="50px">Add employee</a>&nbsp;&nbsp;&nbsp;






</body>
</html>