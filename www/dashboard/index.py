import frappe

def get_context(context):
    # Redirect to react-app
    frappe.local.response["type"] = "redirect"
    frappe.local.response["location"] = "/react-app"
    return context
