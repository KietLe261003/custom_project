import frappe
from frappe import _
import json


@frappe.whitelist()
def get_dashboard_data():
    """Get dashboard statistics"""
    try:
        # Example: Get actual data from your doctypes
        # You can replace these with actual queries to your data
        
        data = {
            "users": frappe.db.count("User", {"enabled": 1}),
            "projects": 25,  # Replace with actual project count
            "tasks": 89,     # Replace with actual task count
            "completed_tasks": 67  # Replace with actual completed task count
        }
        
        return {
            "success": True,
            "data": data
        }
    except Exception as e:
        frappe.log_error(f"Error in get_dashboard_data: {str(e)}")
        return {
            "success": False,
            "error": str(e)
        }


@frappe.whitelist()
def get_projects():
    """Get all projects"""
    try:
        # Example query - replace with your actual Project doctype
        projects = []
        
        # If you have a Project doctype, uncomment and modify:
        # projects = frappe.get_all("Project", 
        #     fields=["name", "title", "status", "creation", "modified"],
        #     order_by="creation desc"
        # )
        
        return {
            "success": True,
            "data": projects
        }
    except Exception as e:
        frappe.log_error(f"Error in get_projects: {str(e)}")
        return {
            "success": False,
            "error": str(e)
        }


@frappe.whitelist()
def create_project():
    """Create a new project"""
    try:
        data = json.loads(frappe.request.data)
        
        # Example project creation - modify according to your doctype
        # project = frappe.get_doc({
        #     "doctype": "Project",
        #     "title": data.get("title"),
        #     "description": data.get("description"),
        #     "status": "Open"
        # })
        # project.insert()
        
        return {
            "success": True,
            "message": _("Project created successfully"),
            # "data": project.as_dict()
        }
    except Exception as e:
        frappe.log_error(f"Error in create_project: {str(e)}")
        return {
            "success": False,
            "error": str(e)
        }


@frappe.whitelist()
def update_project():
    """Update an existing project"""
    try:
        data = json.loads(frappe.request.data)
        project_id = data.get("id")
        
        # Example project update - modify according to your doctype
        # project = frappe.get_doc("Project", project_id)
        # project.update(data)
        # project.save()
        
        return {
            "success": True,
            "message": _("Project updated successfully")
        }
    except Exception as e:
        frappe.log_error(f"Error in update_project: {str(e)}")
        return {
            "success": False,
            "error": str(e)
        }


@frappe.whitelist()
def delete_project():
    """Delete a project"""
    try:
        data = json.loads(frappe.request.data)
        project_id = data.get("id")
        
        # Example project deletion - modify according to your doctype
        # frappe.delete_doc("Project", project_id)
        
        return {
            "success": True,
            "message": _("Project deleted successfully")
        }
    except Exception as e:
        frappe.log_error(f"Error in delete_project: {str(e)}")
        return {
            "success": False,
            "error": str(e)
        }


@frappe.whitelist()
def get_users():
    """Get all users"""
    try:
        users = frappe.get_all("User", 
            fields=["name", "first_name", "last_name", "email", "enabled"],
            filters={"enabled": 1},
            order_by="creation desc"
        )
        
        return {
            "success": True,
            "data": users
        }
    except Exception as e:
        frappe.log_error(f"Error in get_users: {str(e)}")
        return {
            "success": False,
            "error": str(e)
        }


@frappe.whitelist()
def create_user():
    """Create a new user"""
    try:
        data = json.loads(frappe.request.data)
        
        # Create user with Frappe's user creation
        user = frappe.get_doc({
            "doctype": "User",
            "email": data.get("email"),
            "first_name": data.get("first_name"),
            "last_name": data.get("last_name"),
            "enabled": 1,
            "user_type": "System User"
        })
        user.insert()
        
        return {
            "success": True,
            "message": _("User created successfully"),
            "data": user.as_dict()
        }
    except Exception as e:
        frappe.log_error(f"Error in create_user: {str(e)}")
        return {
            "success": False,
            "error": str(e)
        }
