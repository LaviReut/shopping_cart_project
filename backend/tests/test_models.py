from django.test import TestCase
from cart.models import Orders, Products


class YourTestClass(TestCase):
    fixtures = ['fixtures/products.json']
    fixtures = ['fixtures/users.json']
    
    def add_user(self):
        self.assertFalse(False)

    def add_product(self):
        self.assertTrue(True)

    def add_order(self):
        self.assertEqual(1 + 1, 2)