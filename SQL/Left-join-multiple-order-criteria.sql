/*Please add ; after each select statement*/
CREATE PROCEDURE bugsInComponent()
BEGIN
	select  bug.title as bug_title, 
	comp.title as component_title,
(select count(component_id) from BugComponent where component_id = comp.id group by component_id) as bugs_in_component from BugComponent bc left join Component comp on comp.id = bc.component_id 
left join Bug bug on bug.num = bc.bug_num  
where bug_num in 
		(select bug_num FROM BugComponent GROUP BY bug_num HAVING COUNT(*) > 1) order by bugs_in_component desc, comp.id, bc.bug_num;
END