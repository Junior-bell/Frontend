<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@page isELIgnored="false" %>
    <%@taglib uri="http://www.springframework.org/tags/form" prefix="frm" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Employee Registration form</title>
</head>
<body>
<frm:form modelAttribute="emp">
<table align="center" bgcolor="cyan">
<tr>
<td> Employee Name::</td>
<td><frm:input path="ename"/></td>
</tr>
<tr>
<td>Employee Designation ::</td>
<td><frm:input path="job"/></td>
</tr>
<tr>
<td><frm:input path="sal"/></td>
</tr>
<tr>
<td><frm:input path="deptno"/></td>
</tr>
<tr>
<td><input type="submit" value="submit"/></td>
<td><input type="reset" value="cancel"/></td>
</tr>
</table>
</frm:form>


</body>
</html>