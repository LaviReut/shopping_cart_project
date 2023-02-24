from django.test import TestCase

class TestCalls(TestCase):
    # def test_call_view_deny_anonymous(self):
    #     response = self.client.get('/api/products', follow=True)
    #     self.assertRedirects(response, '/login/')
    #     response = self.client.post('/api/products', follow=True)
    #     self.assertRedirects(response, '/login/')
    fixtures = ['products.json']
    fixtures = ['users.json']
    def test_call_products_endpoint(self):
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, 200)

    def test_call_orders_endpoint(self):
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, 200)

    def test_call_login_endpoint(self):
        response = self.client.login(username='admin', password='123')
        self.assertTrue(response)

    def test_False_call_login_endpoint(self):
        response = self.client.login(username='admin', password='1233')
        self.assertFalse(response)